import { bytesToHex as bufferToHex } from "@nomicfoundation/ethereumjs-util";

import {
  ContractFunction,
  SourceLocation,
  SourceFile,
  ContractFunctionType,
  ContractFunctionVisibility,
} from "@nomicfoundation/edr";

import { AbiHelpers } from "../../util/abi-helpers";

import { Opcode } from "./opcodes";

export {
  ContractFunction,
  SourceLocation,
  SourceFile,
  ContractFunctionType,
  ContractFunctionVisibility,
};

/* eslint-disable @nomicfoundation/hardhat-internal-rules/only-hardhat-error */

export enum JumpType {
  NOT_JUMP,
  INTO_FUNCTION,
  OUTOF_FUNCTION,
  INTERNAL_JUMP,
}

export enum ContractType {
  CONTRACT,
  LIBRARY,
}

export class Contract {
  public readonly customErrors: CustomError[] = [];

  private _constructor: ContractFunction | undefined;
  private _fallback: ContractFunction | undefined;
  private _receive: ContractFunction | undefined;
  private readonly _localFunctions: ContractFunction[] = [];
  private readonly _selectorHexToFunction: Map<string, ContractFunction> =
    new Map();

  constructor(
    public readonly name: string,
    public readonly type: ContractType,
    public readonly location: SourceLocation
  ) {}

  public get constructorFunction(): ContractFunction | undefined {
    return this._constructor;
  }

  public get fallback(): ContractFunction | undefined {
    return this._fallback;
  }

  public get receive(): ContractFunction | undefined {
    return this._receive;
  }

  public addLocalFunction(func: ContractFunction) {
    if (func.contract !== this) {
      throw new Error("Function isn't local");
    }

    if (
      func.visibility === ContractFunctionVisibility.PUBLIC ||
      func.visibility === ContractFunctionVisibility.EXTERNAL
    ) {
      if (
        func.type === ContractFunctionType.FUNCTION ||
        func.type === ContractFunctionType.GETTER
      ) {
        this._selectorHexToFunction.set(bufferToHex(func.selector!), func);
      } else if (func.type === ContractFunctionType.CONSTRUCTOR) {
        this._constructor = func;
      } else if (func.type === ContractFunctionType.FALLBACK) {
        this._fallback = func;
      } else if (func.type === ContractFunctionType.RECEIVE) {
        this._receive = func;
      }
    }

    this._localFunctions.push(func);
  }

  public addCustomError(customError: CustomError) {
    this.customErrors.push(customError);
  }

  public addNextLinearizedBaseContract(baseContract: Contract) {
    if (this._fallback === undefined && baseContract._fallback !== undefined) {
      this._fallback = baseContract._fallback;
    }
    if (this._receive === undefined && baseContract._receive !== undefined) {
      this._receive = baseContract._receive;
    }

    for (const baseContractFunction of baseContract._localFunctions) {
      if (
        baseContractFunction.type !== ContractFunctionType.GETTER &&
        baseContractFunction.type !== ContractFunctionType.FUNCTION
      ) {
        continue;
      }

      if (
        baseContractFunction.visibility !== ContractFunctionVisibility.PUBLIC &&
        baseContractFunction.visibility !== ContractFunctionVisibility.EXTERNAL
      ) {
        continue;
      }

      const selectorHex = bufferToHex(baseContractFunction.selector!);
      if (!this._selectorHexToFunction.has(selectorHex)) {
        this._selectorHexToFunction.set(selectorHex, baseContractFunction);
      }
    }
  }

  public getFunctionFromSelector(
    selector: Uint8Array
  ): ContractFunction | undefined {
    return this._selectorHexToFunction.get(bufferToHex(selector));
  }

  /**
   * We compute selectors manually, which is particularly hard. We do this
   * because we need to map selectors to AST nodes, and it seems easier to start
   * from the AST node. This is surprisingly super hard: things like inherited
   * enums, structs and ABIv2 complicate it.
   *
   * As we know that that can fail, we run a heuristic that tries to correct
   * incorrect selectors. What it does is checking the `evm.methodIdentifiers`
   * compiler output, and detect missing selectors. Then we take those and
   * find contract functions with the same name. If there are multiple of those
   * we can't do anything. If there is a single one, it must have an incorrect
   * selector, so we update it with the `evm.methodIdentifiers`'s value.
   */
  public correctSelector(functionName: string, selector: Buffer): boolean {
    const functions = Array.from(this._selectorHexToFunction.values()).filter(
      (cf) => cf.name === functionName
    );

    if (functions.length !== 1) {
      return false;
    }

    const functionToCorrect = functions[0];

    if (functionToCorrect.selector !== undefined) {
      this._selectorHexToFunction.delete(
        bufferToHex(functionToCorrect.selector)
      );
    }

    functionToCorrect.selector = selector;
    this._selectorHexToFunction.set(bufferToHex(selector), functionToCorrect);
    return true;
  }
}

export class CustomError {
  /**
   * Return a CustomError from the given ABI information: the name
   * of the error and its inputs. Returns undefined if it can't build
   * the CustomError.
   */
  public static fromABI(name: string, inputs: any[]): CustomError | undefined {
    const selector = AbiHelpers.computeSelector(name, inputs);

    if (selector !== undefined) {
      return new CustomError(selector, name, inputs);
    }
  }

  private constructor(
    public readonly selector: Uint8Array,
    public readonly name: string,
    public readonly paramTypes: any[]
  ) {}
}

export class Instruction {
  constructor(
    public readonly pc: number,
    public readonly opcode: Opcode,
    public readonly jumpType: JumpType,
    // Used only for debugging
    public readonly pushData?: Buffer,
    public readonly location?: SourceLocation
  ) {}
}

interface ImmutableReference {
  start: number;
  length: number;
}

export class Bytecode {
  private readonly _pcToInstruction: Map<number, Instruction> = new Map();

  constructor(
    public readonly contract: Contract,
    public readonly isDeployment: boolean,
    public readonly normalizedCode: Buffer,
    instructions: Instruction[],
    public readonly libraryAddressPositions: number[],
    public readonly immutableReferences: ImmutableReference[],
    public readonly compilerVersion: string
  ) {
    for (const inst of instructions) {
      this._pcToInstruction.set(inst.pc, inst);
    }
  }

  public getInstruction(pc: number): Instruction {
    const inst = this._pcToInstruction.get(pc);

    if (inst === undefined) {
      throw new Error(`There's no instruction at pc ${pc}`);
    }

    return inst;
  }

  public hasInstruction(pc: number): boolean {
    return this._pcToInstruction.has(pc);
  }
}
