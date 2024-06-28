import { opcodes } from "@nomicfoundation/edr";

export type Opcode = opcodes.Opcode;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export const Opcode = opcodes.Opcode;

export const isPush = opcodes.isPush;
export const isJump = opcodes.isJump;
export const getPushLength = opcodes.getPushLength;
export const getOpcodeLength = opcodes.getOpcodeLength;
export const isCall = opcodes.isCall;
export const isCreate = opcodes.isCreate;
