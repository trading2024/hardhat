// ------------------------------------
// This code was autogenerated using
// scripts/console-library-generator.ts
// ------------------------------------

export const Int256Ty = "Int256";
export const Uint256Ty = "Uint256";
export const StringTy = "String";
export const BoolTy = "Bool";
export const AddressTy = "Address";
export const BytesTy = "Bytes";
export const Bytes1Ty = "Bytes1";
export const Bytes2Ty = "Bytes2";
export const Bytes3Ty = "Bytes3";
export const Bytes4Ty = "Bytes4";
export const Bytes5Ty = "Bytes5";
export const Bytes6Ty = "Bytes6";
export const Bytes7Ty = "Bytes7";
export const Bytes8Ty = "Bytes8";
export const Bytes9Ty = "Bytes9";
export const Bytes10Ty = "Bytes10";
export const Bytes11Ty = "Bytes11";
export const Bytes12Ty = "Bytes12";
export const Bytes13Ty = "Bytes13";
export const Bytes14Ty = "Bytes14";
export const Bytes15Ty = "Bytes15";
export const Bytes16Ty = "Bytes16";
export const Bytes17Ty = "Bytes17";
export const Bytes18Ty = "Bytes18";
export const Bytes19Ty = "Bytes19";
export const Bytes20Ty = "Bytes20";
export const Bytes21Ty = "Bytes21";
export const Bytes22Ty = "Bytes22";
export const Bytes23Ty = "Bytes23";
export const Bytes24Ty = "Bytes24";
export const Bytes25Ty = "Bytes25";
export const Bytes26Ty = "Bytes26";
export const Bytes27Ty = "Bytes27";
export const Bytes28Ty = "Bytes28";
export const Bytes29Ty = "Bytes29";
export const Bytes30Ty = "Bytes30";
export const Bytes31Ty = "Bytes31";
export const Bytes32Ty = "Bytes32";

/** Maps from a 4-byte function selector to a signature (argument types) */
export const CONSOLE_LOG_SIGNATURES: Record<number, string[]> = {
  0x51973ec9: [],
  0x2d5b6cb9: [Int256Ty],
  0x4e0c1d1d: [Int256Ty],
  0xf82c50f1: [Uint256Ty],
  0xf5b1bba9: [Uint256Ty],
  0x41304fac: [StringTy],
  0x32458eed: [BoolTy],
  0x2c2ecbc2: [AddressTy],
  0x0be77f56: [BytesTy],
  0x6e18a128: [Bytes1Ty],
  0xe9b62296: [Bytes2Ty],
  0x2d834926: [Bytes3Ty],
  0xe05f48d1: [Bytes4Ty],
  0xa684808d: [Bytes5Ty],
  0xae84a591: [Bytes6Ty],
  0x4ed57e28: [Bytes7Ty],
  0x4f84252e: [Bytes8Ty],
  0x90bd8cd0: [Bytes9Ty],
  0x013d178b: [Bytes10Ty],
  0x04004a2e: [Bytes11Ty],
  0x86a06abd: [Bytes12Ty],
  0x94529e34: [Bytes13Ty],
  0x9266f07f: [Bytes14Ty],
  0xda9574e0: [Bytes15Ty],
  0x665c6104: [Bytes16Ty],
  0x339f673a: [Bytes17Ty],
  0xc4d23d9a: [Bytes18Ty],
  0x5e6b5a33: [Bytes19Ty],
  0x5188e3e9: [Bytes20Ty],
  0xe9da3560: [Bytes21Ty],
  0xd5fae89c: [Bytes22Ty],
  0xaba1cf0d: [Bytes23Ty],
  0xf1b35b34: [Bytes24Ty],
  0x0b84bc58: [Bytes25Ty],
  0xf8b149f1: [Bytes26Ty],
  0x3a3757dd: [Bytes27Ty],
  0xc82aeaee: [Bytes28Ty],
  0x4b69c3d5: [Bytes29Ty],
  0xee12c4ed: [Bytes30Ty],
  0xc2854d92: [Bytes31Ty],
  0x27b7cf85: [Bytes32Ty],
  0xf666715a: [Uint256Ty, Uint256Ty],
  0x6c0f6980: [Uint256Ty, Uint256Ty],
  0x643fd0df: [Uint256Ty, StringTy],
  0x0fa3f345: [Uint256Ty, StringTy],
  0x1c9d7eb3: [Uint256Ty, BoolTy],
  0x1e6dd4ec: [Uint256Ty, BoolTy],
  0x69276c86: [Uint256Ty, AddressTy],
  0x58eb860c: [Uint256Ty, AddressTy],
  0xb60e72cc: [StringTy, Uint256Ty],
  0x9710a9d0: [StringTy, Uint256Ty],
  0x4b5c4277: [StringTy, StringTy],
  0xc3b55635: [StringTy, BoolTy],
  0x319af333: [StringTy, AddressTy],
  0x399174d3: [BoolTy, Uint256Ty],
  0x364b6a92: [BoolTy, Uint256Ty],
  0x8feac525: [BoolTy, StringTy],
  0x2a110e83: [BoolTy, BoolTy],
  0x853c4849: [BoolTy, AddressTy],
  0x8309e8a8: [AddressTy, Uint256Ty],
  0x2243cfa3: [AddressTy, Uint256Ty],
  0x759f86bb: [AddressTy, StringTy],
  0x75b605d3: [AddressTy, BoolTy],
  0xdaf0d4aa: [AddressTy, AddressTy],
  0xd1ed7a3c: [Uint256Ty, Uint256Ty, Uint256Ty],
  0xe7820a74: [Uint256Ty, Uint256Ty, Uint256Ty],
  0x71d04af2: [Uint256Ty, Uint256Ty, StringTy],
  0x7d690ee6: [Uint256Ty, Uint256Ty, StringTy],
  0x4766da72: [Uint256Ty, Uint256Ty, BoolTy],
  0x67570ff7: [Uint256Ty, Uint256Ty, BoolTy],
  0x5c96b331: [Uint256Ty, Uint256Ty, AddressTy],
  0xbe33491b: [Uint256Ty, Uint256Ty, AddressTy],
  0x37aa7d4c: [Uint256Ty, StringTy, Uint256Ty],
  0x5b6de83f: [Uint256Ty, StringTy, Uint256Ty],
  0xb115611f: [Uint256Ty, StringTy, StringTy],
  0x3f57c295: [Uint256Ty, StringTy, StringTy],
  0x4ceda75a: [Uint256Ty, StringTy, BoolTy],
  0x46a7d0ce: [Uint256Ty, StringTy, BoolTy],
  0x7afac959: [Uint256Ty, StringTy, AddressTy],
  0x1f90f24a: [Uint256Ty, StringTy, AddressTy],
  0x20098014: [Uint256Ty, BoolTy, Uint256Ty],
  0x5a4d9922: [Uint256Ty, BoolTy, Uint256Ty],
  0x85775021: [Uint256Ty, BoolTy, StringTy],
  0x8b0e14fe: [Uint256Ty, BoolTy, StringTy],
  0x20718650: [Uint256Ty, BoolTy, BoolTy],
  0xd5ceace0: [Uint256Ty, BoolTy, BoolTy],
  0x35085f7b: [Uint256Ty, BoolTy, AddressTy],
  0x424effbf: [Uint256Ty, BoolTy, AddressTy],
  0x5a9b5ed5: [Uint256Ty, AddressTy, Uint256Ty],
  0x884343aa: [Uint256Ty, AddressTy, Uint256Ty],
  0x63cb41f9: [Uint256Ty, AddressTy, StringTy],
  0xce83047b: [Uint256Ty, AddressTy, StringTy],
  0x9b6ec042: [Uint256Ty, AddressTy, BoolTy],
  0x7ad0128e: [Uint256Ty, AddressTy, BoolTy],
  0xbcfd9be0: [Uint256Ty, AddressTy, AddressTy],
  0x7d77a61b: [Uint256Ty, AddressTy, AddressTy],
  0xca47c4eb: [StringTy, Uint256Ty, Uint256Ty],
  0x969cdd03: [StringTy, Uint256Ty, Uint256Ty],
  0x5970e089: [StringTy, Uint256Ty, StringTy],
  0xa3f5c739: [StringTy, Uint256Ty, StringTy],
  0xca7733b1: [StringTy, Uint256Ty, BoolTy],
  0xf102ee05: [StringTy, Uint256Ty, BoolTy],
  0x1c7ec448: [StringTy, Uint256Ty, AddressTy],
  0xe3849f79: [StringTy, Uint256Ty, AddressTy],
  0x5821efa1: [StringTy, StringTy, Uint256Ty],
  0xf362ca59: [StringTy, StringTy, Uint256Ty],
  0x2ced7cef: [StringTy, StringTy, StringTy],
  0xb0e0f9b5: [StringTy, StringTy, BoolTy],
  0x95ed0195: [StringTy, StringTy, AddressTy],
  0xc95958d6: [StringTy, BoolTy, Uint256Ty],
  0x291bb9d0: [StringTy, BoolTy, Uint256Ty],
  0xe298f47d: [StringTy, BoolTy, StringTy],
  0x850b7ad6: [StringTy, BoolTy, BoolTy],
  0x932bbb38: [StringTy, BoolTy, AddressTy],
  0x0d26b925: [StringTy, AddressTy, Uint256Ty],
  0x07c81217: [StringTy, AddressTy, Uint256Ty],
  0xe0e9ad4f: [StringTy, AddressTy, StringTy],
  0xc91d5ed4: [StringTy, AddressTy, BoolTy],
  0xfcec75e0: [StringTy, AddressTy, AddressTy],
  0x37103367: [BoolTy, Uint256Ty, Uint256Ty],
  0x3b5c03e0: [BoolTy, Uint256Ty, Uint256Ty],
  0xc3fc3970: [BoolTy, Uint256Ty, StringTy],
  0xc8397eb0: [BoolTy, Uint256Ty, StringTy],
  0xe8defba9: [BoolTy, Uint256Ty, BoolTy],
  0x1badc9eb: [BoolTy, Uint256Ty, BoolTy],
  0x088ef9d2: [BoolTy, Uint256Ty, AddressTy],
  0xc4d23507: [BoolTy, Uint256Ty, AddressTy],
  0x1093ee11: [BoolTy, StringTy, Uint256Ty],
  0xc0382aac: [BoolTy, StringTy, Uint256Ty],
  0xb076847f: [BoolTy, StringTy, StringTy],
  0xdbb4c247: [BoolTy, StringTy, BoolTy],
  0x9591b953: [BoolTy, StringTy, AddressTy],
  0x12f21602: [BoolTy, BoolTy, Uint256Ty],
  0xb01365bb: [BoolTy, BoolTy, Uint256Ty],
  0x2555fa46: [BoolTy, BoolTy, StringTy],
  0x50709698: [BoolTy, BoolTy, BoolTy],
  0x1078f68d: [BoolTy, BoolTy, AddressTy],
  0x5f7b9afb: [BoolTy, AddressTy, Uint256Ty],
  0xeb704baf: [BoolTy, AddressTy, Uint256Ty],
  0xde9a9270: [BoolTy, AddressTy, StringTy],
  0x18c9c746: [BoolTy, AddressTy, BoolTy],
  0xd2763667: [BoolTy, AddressTy, AddressTy],
  0xb69bcaf6: [AddressTy, Uint256Ty, Uint256Ty],
  0x8786135e: [AddressTy, Uint256Ty, Uint256Ty],
  0xa1f2e8aa: [AddressTy, Uint256Ty, StringTy],
  0xbaf96849: [AddressTy, Uint256Ty, StringTy],
  0x678209a8: [AddressTy, Uint256Ty, BoolTy],
  0xe54ae144: [AddressTy, Uint256Ty, BoolTy],
  0x7bc0d848: [AddressTy, Uint256Ty, AddressTy],
  0x97eca394: [AddressTy, Uint256Ty, AddressTy],
  0x67dd6ff1: [AddressTy, StringTy, Uint256Ty],
  0x1cdaf28a: [AddressTy, StringTy, Uint256Ty],
  0xfb772265: [AddressTy, StringTy, StringTy],
  0xcf020fb1: [AddressTy, StringTy, BoolTy],
  0xf08744e8: [AddressTy, StringTy, AddressTy],
  0x9c4f99fb: [AddressTy, BoolTy, Uint256Ty],
  0x2c468d15: [AddressTy, BoolTy, Uint256Ty],
  0x212255cc: [AddressTy, BoolTy, StringTy],
  0xeb830c92: [AddressTy, BoolTy, BoolTy],
  0xf11699ed: [AddressTy, BoolTy, AddressTy],
  0x17fe6185: [AddressTy, AddressTy, Uint256Ty],
  0x6c366d72: [AddressTy, AddressTy, Uint256Ty],
  0x007150be: [AddressTy, AddressTy, StringTy],
  0xf2a66286: [AddressTy, AddressTy, BoolTy],
  0x018c84c2: [AddressTy, AddressTy, AddressTy],
  0x193fb800: [Uint256Ty, Uint256Ty, Uint256Ty, Uint256Ty],
  0x5ca0ad3e: [Uint256Ty, Uint256Ty, Uint256Ty, Uint256Ty],
  0x59cfcbe3: [Uint256Ty, Uint256Ty, Uint256Ty, StringTy],
  0x78ad7a0c: [Uint256Ty, Uint256Ty, Uint256Ty, StringTy],
  0xc598d185: [Uint256Ty, Uint256Ty, Uint256Ty, BoolTy],
  0x6452b9cb: [Uint256Ty, Uint256Ty, Uint256Ty, BoolTy],
  0xfa8185af: [Uint256Ty, Uint256Ty, Uint256Ty, AddressTy],
  0xe0853f69: [Uint256Ty, Uint256Ty, Uint256Ty, AddressTy],
  0x5da297eb: [Uint256Ty, Uint256Ty, StringTy, Uint256Ty],
  0x3894163d: [Uint256Ty, Uint256Ty, StringTy, Uint256Ty],
  0x27d8afd2: [Uint256Ty, Uint256Ty, StringTy, StringTy],
  0x7c032a32: [Uint256Ty, Uint256Ty, StringTy, StringTy],
  0x7af6ab25: [Uint256Ty, Uint256Ty, StringTy, BoolTy],
  0xb22eaf06: [Uint256Ty, Uint256Ty, StringTy, BoolTy],
  0x42d21db7: [Uint256Ty, Uint256Ty, StringTy, AddressTy],
  0x433285a2: [Uint256Ty, Uint256Ty, StringTy, AddressTy],
  0xeb7f6fd2: [Uint256Ty, Uint256Ty, BoolTy, Uint256Ty],
  0x6c647c8c: [Uint256Ty, Uint256Ty, BoolTy, Uint256Ty],
  0xa5b4fc99: [Uint256Ty, Uint256Ty, BoolTy, StringTy],
  0xefd9cbee: [Uint256Ty, Uint256Ty, BoolTy, StringTy],
  0xab085ae6: [Uint256Ty, Uint256Ty, BoolTy, BoolTy],
  0x94be3bb1: [Uint256Ty, Uint256Ty, BoolTy, BoolTy],
  0x9a816a83: [Uint256Ty, Uint256Ty, BoolTy, AddressTy],
  0xe117744f: [Uint256Ty, Uint256Ty, BoolTy, AddressTy],
  0x88f6e4b2: [Uint256Ty, Uint256Ty, AddressTy, Uint256Ty],
  0x610ba8c0: [Uint256Ty, Uint256Ty, AddressTy, Uint256Ty],
  0x6cde40b8: [Uint256Ty, Uint256Ty, AddressTy, StringTy],
  0xd6a2d1de: [Uint256Ty, Uint256Ty, AddressTy, StringTy],
  0x15cac476: [Uint256Ty, Uint256Ty, AddressTy, BoolTy],
  0xa8e820ae: [Uint256Ty, Uint256Ty, AddressTy, BoolTy],
  0x56a5d1b1: [Uint256Ty, Uint256Ty, AddressTy, AddressTy],
  0xca939b20: [Uint256Ty, Uint256Ty, AddressTy, AddressTy],
  0x82c25b74: [Uint256Ty, StringTy, Uint256Ty, Uint256Ty],
  0xc0043807: [Uint256Ty, StringTy, Uint256Ty, Uint256Ty],
  0xb7b914ca: [Uint256Ty, StringTy, Uint256Ty, StringTy],
  0xa2bc0c99: [Uint256Ty, StringTy, Uint256Ty, StringTy],
  0x691a8f74: [Uint256Ty, StringTy, Uint256Ty, BoolTy],
  0x875a6e2e: [Uint256Ty, StringTy, Uint256Ty, BoolTy],
  0x3b2279b4: [Uint256Ty, StringTy, Uint256Ty, AddressTy],
  0xab7bd9fd: [Uint256Ty, StringTy, Uint256Ty, AddressTy],
  0xb028c9bd: [Uint256Ty, StringTy, StringTy, Uint256Ty],
  0x76ec635e: [Uint256Ty, StringTy, StringTy, Uint256Ty],
  0x21ad0683: [Uint256Ty, StringTy, StringTy, StringTy],
  0x57dd0a11: [Uint256Ty, StringTy, StringTy, StringTy],
  0xb3a6b6bd: [Uint256Ty, StringTy, StringTy, BoolTy],
  0x12862b98: [Uint256Ty, StringTy, StringTy, BoolTy],
  0xd583c602: [Uint256Ty, StringTy, StringTy, AddressTy],
  0xcc988aa0: [Uint256Ty, StringTy, StringTy, AddressTy],
  0xcf009880: [Uint256Ty, StringTy, BoolTy, Uint256Ty],
  0xa4b48a7f: [Uint256Ty, StringTy, BoolTy, Uint256Ty],
  0xd2d423cd: [Uint256Ty, StringTy, BoolTy, StringTy],
  0x8d489ca0: [Uint256Ty, StringTy, BoolTy, StringTy],
  0xba535d9c: [Uint256Ty, StringTy, BoolTy, BoolTy],
  0x51bc2bc1: [Uint256Ty, StringTy, BoolTy, BoolTy],
  0xae2ec581: [Uint256Ty, StringTy, BoolTy, AddressTy],
  0x796f28a0: [Uint256Ty, StringTy, BoolTy, AddressTy],
  0xe8d3018d: [Uint256Ty, StringTy, AddressTy, Uint256Ty],
  0x98e7f3f3: [Uint256Ty, StringTy, AddressTy, Uint256Ty],
  0x9c3adfa1: [Uint256Ty, StringTy, AddressTy, StringTy],
  0xf898577f: [Uint256Ty, StringTy, AddressTy, StringTy],
  0x90c30a56: [Uint256Ty, StringTy, AddressTy, BoolTy],
  0xf93fff37: [Uint256Ty, StringTy, AddressTy, BoolTy],
  0x6168ed61: [Uint256Ty, StringTy, AddressTy, AddressTy],
  0x7fa5458b: [Uint256Ty, StringTy, AddressTy, AddressTy],
  0xc6acc7a8: [Uint256Ty, BoolTy, Uint256Ty, Uint256Ty],
  0x56828da4: [Uint256Ty, BoolTy, Uint256Ty, Uint256Ty],
  0xde03e774: [Uint256Ty, BoolTy, Uint256Ty, StringTy],
  0xe8ddbc56: [Uint256Ty, BoolTy, Uint256Ty, StringTy],
  0x91a02e2a: [Uint256Ty, BoolTy, Uint256Ty, BoolTy],
  0xd2abc4fd: [Uint256Ty, BoolTy, Uint256Ty, BoolTy],
  0x88cb6041: [Uint256Ty, BoolTy, Uint256Ty, AddressTy],
  0x4f40058e: [Uint256Ty, BoolTy, Uint256Ty, AddressTy],
  0x2c1d0746: [Uint256Ty, BoolTy, StringTy, Uint256Ty],
  0x915fdb28: [Uint256Ty, BoolTy, StringTy, Uint256Ty],
  0x68c8b8bd: [Uint256Ty, BoolTy, StringTy, StringTy],
  0xa433fcfd: [Uint256Ty, BoolTy, StringTy, StringTy],
  0xeb928d7f: [Uint256Ty, BoolTy, StringTy, BoolTy],
  0x346eb8c7: [Uint256Ty, BoolTy, StringTy, BoolTy],
  0xef529018: [Uint256Ty, BoolTy, StringTy, AddressTy],
  0x496e2bb4: [Uint256Ty, BoolTy, StringTy, AddressTy],
  0x7464ce23: [Uint256Ty, BoolTy, BoolTy, Uint256Ty],
  0xbd25ad59: [Uint256Ty, BoolTy, BoolTy, Uint256Ty],
  0xdddb9561: [Uint256Ty, BoolTy, BoolTy, StringTy],
  0x318ae59b: [Uint256Ty, BoolTy, BoolTy, StringTy],
  0xb6f577a1: [Uint256Ty, BoolTy, BoolTy, BoolTy],
  0x4e6c5315: [Uint256Ty, BoolTy, BoolTy, BoolTy],
  0x69640b59: [Uint256Ty, BoolTy, BoolTy, AddressTy],
  0x5306225d: [Uint256Ty, BoolTy, BoolTy, AddressTy],
  0x078287f5: [Uint256Ty, BoolTy, AddressTy, Uint256Ty],
  0x41b5ef3b: [Uint256Ty, BoolTy, AddressTy, Uint256Ty],
  0xade052c7: [Uint256Ty, BoolTy, AddressTy, StringTy],
  0xa230761e: [Uint256Ty, BoolTy, AddressTy, StringTy],
  0x454d54a5: [Uint256Ty, BoolTy, AddressTy, BoolTy],
  0x91fb1242: [Uint256Ty, BoolTy, AddressTy, BoolTy],
  0xa1ef4cbb: [Uint256Ty, BoolTy, AddressTy, AddressTy],
  0x86edc10c: [Uint256Ty, BoolTy, AddressTy, AddressTy],
  0x0c9cd9c1: [Uint256Ty, AddressTy, Uint256Ty, Uint256Ty],
  0xca9a3eb4: [Uint256Ty, AddressTy, Uint256Ty, Uint256Ty],
  0xddb06521: [Uint256Ty, AddressTy, Uint256Ty, StringTy],
  0x3ed3bd28: [Uint256Ty, AddressTy, Uint256Ty, StringTy],
  0x5f743a7c: [Uint256Ty, AddressTy, Uint256Ty, BoolTy],
  0x19f67369: [Uint256Ty, AddressTy, Uint256Ty, BoolTy],
  0x15c127b5: [Uint256Ty, AddressTy, Uint256Ty, AddressTy],
  0xfdb2ecd4: [Uint256Ty, AddressTy, Uint256Ty, AddressTy],
  0x46826b5d: [Uint256Ty, AddressTy, StringTy, Uint256Ty],
  0xa0c414e8: [Uint256Ty, AddressTy, StringTy, Uint256Ty],
  0x3e128ca3: [Uint256Ty, AddressTy, StringTy, StringTy],
  0x8d778624: [Uint256Ty, AddressTy, StringTy, StringTy],
  0xcc32ab07: [Uint256Ty, AddressTy, StringTy, BoolTy],
  0x22a479a6: [Uint256Ty, AddressTy, StringTy, BoolTy],
  0x9cba8fff: [Uint256Ty, AddressTy, StringTy, AddressTy],
  0xcbe58efd: [Uint256Ty, AddressTy, StringTy, AddressTy],
  0x5abd992a: [Uint256Ty, AddressTy, BoolTy, Uint256Ty],
  0x7b08e8eb: [Uint256Ty, AddressTy, BoolTy, Uint256Ty],
  0x90fb06aa: [Uint256Ty, AddressTy, BoolTy, StringTy],
  0x63f0e242: [Uint256Ty, AddressTy, BoolTy, StringTy],
  0xe351140f: [Uint256Ty, AddressTy, BoolTy, BoolTy],
  0x7e27410d: [Uint256Ty, AddressTy, BoolTy, BoolTy],
  0xef72c513: [Uint256Ty, AddressTy, BoolTy, AddressTy],
  0xb6313094: [Uint256Ty, AddressTy, BoolTy, AddressTy],
  0x736efbb6: [Uint256Ty, AddressTy, AddressTy, Uint256Ty],
  0x9a3cbf96: [Uint256Ty, AddressTy, AddressTy, Uint256Ty],
  0x031c6f73: [Uint256Ty, AddressTy, AddressTy, StringTy],
  0x7943dc66: [Uint256Ty, AddressTy, AddressTy, StringTy],
  0x091ffaf5: [Uint256Ty, AddressTy, AddressTy, BoolTy],
  0x01550b04: [Uint256Ty, AddressTy, AddressTy, BoolTy],
  0x2488b414: [Uint256Ty, AddressTy, AddressTy, AddressTy],
  0x554745f9: [Uint256Ty, AddressTy, AddressTy, AddressTy],
  0xa7a87853: [StringTy, Uint256Ty, Uint256Ty, Uint256Ty],
  0x08ee5666: [StringTy, Uint256Ty, Uint256Ty, Uint256Ty],
  0x854b3496: [StringTy, Uint256Ty, Uint256Ty, StringTy],
  0xa54ed4bd: [StringTy, Uint256Ty, Uint256Ty, StringTy],
  0x7626db92: [StringTy, Uint256Ty, Uint256Ty, BoolTy],
  0xf73c7e3d: [StringTy, Uint256Ty, Uint256Ty, BoolTy],
  0xe21de278: [StringTy, Uint256Ty, Uint256Ty, AddressTy],
  0xbed728bf: [StringTy, Uint256Ty, Uint256Ty, AddressTy],
  0xc67ea9d1: [StringTy, Uint256Ty, StringTy, Uint256Ty],
  0xa0c4b225: [StringTy, Uint256Ty, StringTy, Uint256Ty],
  0x5ab84e1f: [StringTy, Uint256Ty, StringTy, StringTy],
  0x6c98dae2: [StringTy, Uint256Ty, StringTy, StringTy],
  0x7d24491d: [StringTy, Uint256Ty, StringTy, BoolTy],
  0xe99f82cf: [StringTy, Uint256Ty, StringTy, BoolTy],
  0x7c4632a4: [StringTy, Uint256Ty, StringTy, AddressTy],
  0xbb7235e9: [StringTy, Uint256Ty, StringTy, AddressTy],
  0xe41b6f6f: [StringTy, Uint256Ty, BoolTy, Uint256Ty],
  0x550e6ef5: [StringTy, Uint256Ty, BoolTy, Uint256Ty],
  0xabf73a98: [StringTy, Uint256Ty, BoolTy, StringTy],
  0x76cc6064: [StringTy, Uint256Ty, BoolTy, StringTy],
  0x354c36d6: [StringTy, Uint256Ty, BoolTy, BoolTy],
  0xe37ff3d0: [StringTy, Uint256Ty, BoolTy, BoolTy],
  0xe0e95b98: [StringTy, Uint256Ty, BoolTy, AddressTy],
  0xe5549d91: [StringTy, Uint256Ty, BoolTy, AddressTy],
  0x4f04fdc6: [StringTy, Uint256Ty, AddressTy, Uint256Ty],
  0x58497afe: [StringTy, Uint256Ty, AddressTy, Uint256Ty],
  0x9ffb2f93: [StringTy, Uint256Ty, AddressTy, StringTy],
  0x3254c2e8: [StringTy, Uint256Ty, AddressTy, StringTy],
  0x82112a42: [StringTy, Uint256Ty, AddressTy, BoolTy],
  0x1106a8f7: [StringTy, Uint256Ty, AddressTy, BoolTy],
  0x5ea2b7ae: [StringTy, Uint256Ty, AddressTy, AddressTy],
  0xeac89281: [StringTy, Uint256Ty, AddressTy, AddressTy],
  0xf45d7d2c: [StringTy, StringTy, Uint256Ty, Uint256Ty],
  0xd5cf17d0: [StringTy, StringTy, Uint256Ty, Uint256Ty],
  0x5d1a971a: [StringTy, StringTy, Uint256Ty, StringTy],
  0x8d142cdd: [StringTy, StringTy, Uint256Ty, StringTy],
  0xc3a8a654: [StringTy, StringTy, Uint256Ty, BoolTy],
  0xe65658ca: [StringTy, StringTy, Uint256Ty, BoolTy],
  0x1023f7b2: [StringTy, StringTy, Uint256Ty, AddressTy],
  0x5d4f4680: [StringTy, StringTy, Uint256Ty, AddressTy],
  0x8eafb02b: [StringTy, StringTy, StringTy, Uint256Ty],
  0x9fd009f5: [StringTy, StringTy, StringTy, Uint256Ty],
  0xde68f20a: [StringTy, StringTy, StringTy, StringTy],
  0x2c1754ed: [StringTy, StringTy, StringTy, BoolTy],
  0x6d572f44: [StringTy, StringTy, StringTy, AddressTy],
  0xd6aefad2: [StringTy, StringTy, BoolTy, Uint256Ty],
  0x86818a7a: [StringTy, StringTy, BoolTy, Uint256Ty],
  0x5e84b0ea: [StringTy, StringTy, BoolTy, StringTy],
  0x40785869: [StringTy, StringTy, BoolTy, BoolTy],
  0xc371c7db: [StringTy, StringTy, BoolTy, AddressTy],
  0x7cc3c607: [StringTy, StringTy, AddressTy, Uint256Ty],
  0x4a81a56a: [StringTy, StringTy, AddressTy, Uint256Ty],
  0xeb1bff80: [StringTy, StringTy, AddressTy, StringTy],
  0x5ccd4e37: [StringTy, StringTy, AddressTy, BoolTy],
  0x439c7bef: [StringTy, StringTy, AddressTy, AddressTy],
  0x64b5bb67: [StringTy, BoolTy, Uint256Ty, Uint256Ty],
  0x5dbff038: [StringTy, BoolTy, Uint256Ty, Uint256Ty],
  0x742d6ee7: [StringTy, BoolTy, Uint256Ty, StringTy],
  0x42b9a227: [StringTy, BoolTy, Uint256Ty, StringTy],
  0x8af7cf8a: [StringTy, BoolTy, Uint256Ty, BoolTy],
  0x3cc5b5d3: [StringTy, BoolTy, Uint256Ty, BoolTy],
  0x935e09bf: [StringTy, BoolTy, Uint256Ty, AddressTy],
  0x71d3850d: [StringTy, BoolTy, Uint256Ty, AddressTy],
  0x24f91465: [StringTy, BoolTy, StringTy, Uint256Ty],
  0x34cb308d: [StringTy, BoolTy, StringTy, Uint256Ty],
  0xa826caeb: [StringTy, BoolTy, StringTy, StringTy],
  0x3f8a701d: [StringTy, BoolTy, StringTy, BoolTy],
  0xe0625b29: [StringTy, BoolTy, StringTy, AddressTy],
  0x8e3f78a9: [StringTy, BoolTy, BoolTy, Uint256Ty],
  0x807531e8: [StringTy, BoolTy, BoolTy, Uint256Ty],
  0x9d22d5dd: [StringTy, BoolTy, BoolTy, StringTy],
  0x895af8c5: [StringTy, BoolTy, BoolTy, BoolTy],
  0x7190a529: [StringTy, BoolTy, BoolTy, AddressTy],
  0x5d08bb05: [StringTy, BoolTy, AddressTy, Uint256Ty],
  0x28df4e96: [StringTy, BoolTy, AddressTy, Uint256Ty],
  0x2d8e33a4: [StringTy, BoolTy, AddressTy, StringTy],
  0x958c28c6: [StringTy, BoolTy, AddressTy, BoolTy],
  0x33e9dd1d: [StringTy, BoolTy, AddressTy, AddressTy],
  0xf8f51b1e: [StringTy, AddressTy, Uint256Ty, Uint256Ty],
  0xdaa394bd: [StringTy, AddressTy, Uint256Ty, Uint256Ty],
  0x5a477632: [StringTy, AddressTy, Uint256Ty, StringTy],
  0x4c55f234: [StringTy, AddressTy, Uint256Ty, StringTy],
  0xfc4845f0: [StringTy, AddressTy, Uint256Ty, BoolTy],
  0x5ac1c13c: [StringTy, AddressTy, Uint256Ty, BoolTy],
  0x63fb8bc5: [StringTy, AddressTy, Uint256Ty, AddressTy],
  0xa366ec80: [StringTy, AddressTy, Uint256Ty, AddressTy],
  0x91d1112e: [StringTy, AddressTy, StringTy, Uint256Ty],
  0x8f624be9: [StringTy, AddressTy, StringTy, Uint256Ty],
  0x245986f2: [StringTy, AddressTy, StringTy, StringTy],
  0x5f15d28c: [StringTy, AddressTy, StringTy, BoolTy],
  0xaabc9a31: [StringTy, AddressTy, StringTy, AddressTy],
  0x3e9f866a: [StringTy, AddressTy, BoolTy, Uint256Ty],
  0xc5d1bb8b: [StringTy, AddressTy, BoolTy, Uint256Ty],
  0x0454c079: [StringTy, AddressTy, BoolTy, StringTy],
  0x79884c2b: [StringTy, AddressTy, BoolTy, BoolTy],
  0x223603bd: [StringTy, AddressTy, BoolTy, AddressTy],
  0x8ef3f399: [StringTy, AddressTy, AddressTy, Uint256Ty],
  0x6eb7943d: [StringTy, AddressTy, AddressTy, Uint256Ty],
  0x800a1c67: [StringTy, AddressTy, AddressTy, StringTy],
  0xb59dbd60: [StringTy, AddressTy, AddressTy, BoolTy],
  0xed8f28f6: [StringTy, AddressTy, AddressTy, AddressTy],
  0x374bb4b2: [BoolTy, Uint256Ty, Uint256Ty, Uint256Ty],
  0x32dfa524: [BoolTy, Uint256Ty, Uint256Ty, Uint256Ty],
  0x8e69fb5d: [BoolTy, Uint256Ty, Uint256Ty, StringTy],
  0xda0666c8: [BoolTy, Uint256Ty, Uint256Ty, StringTy],
  0xbe984353: [BoolTy, Uint256Ty, Uint256Ty, BoolTy],
  0xa41d81de: [BoolTy, Uint256Ty, Uint256Ty, BoolTy],
  0x00dd87b9: [BoolTy, Uint256Ty, Uint256Ty, AddressTy],
  0xf161b221: [BoolTy, Uint256Ty, Uint256Ty, AddressTy],
  0x6a1199e2: [BoolTy, Uint256Ty, StringTy, Uint256Ty],
  0x4180011b: [BoolTy, Uint256Ty, StringTy, Uint256Ty],
  0xf5bc2249: [BoolTy, Uint256Ty, StringTy, StringTy],
  0xd32a6548: [BoolTy, Uint256Ty, StringTy, StringTy],
  0xe5e70b2b: [BoolTy, Uint256Ty, StringTy, BoolTy],
  0x91d2f813: [BoolTy, Uint256Ty, StringTy, BoolTy],
  0xfedd1fff: [BoolTy, Uint256Ty, StringTy, AddressTy],
  0xa5c70d29: [BoolTy, Uint256Ty, StringTy, AddressTy],
  0x7f9bbca2: [BoolTy, Uint256Ty, BoolTy, Uint256Ty],
  0xd3de5593: [BoolTy, Uint256Ty, BoolTy, Uint256Ty],
  0x9143dbb1: [BoolTy, Uint256Ty, BoolTy, StringTy],
  0xb6d569d4: [BoolTy, Uint256Ty, BoolTy, StringTy],
  0xceb5f4d7: [BoolTy, Uint256Ty, BoolTy, BoolTy],
  0x9e01f741: [BoolTy, Uint256Ty, BoolTy, BoolTy],
  0x9acd3616: [BoolTy, Uint256Ty, BoolTy, AddressTy],
  0x4267c7f8: [BoolTy, Uint256Ty, BoolTy, AddressTy],
  0x1537dc87: [BoolTy, Uint256Ty, AddressTy, Uint256Ty],
  0xcaa5236a: [BoolTy, Uint256Ty, AddressTy, Uint256Ty],
  0x1bb3b09a: [BoolTy, Uint256Ty, AddressTy, StringTy],
  0x18091341: [BoolTy, Uint256Ty, AddressTy, StringTy],
  0xb4c314ff: [BoolTy, Uint256Ty, AddressTy, BoolTy],
  0x65adf408: [BoolTy, Uint256Ty, AddressTy, BoolTy],
  0x26f560a8: [BoolTy, Uint256Ty, AddressTy, AddressTy],
  0x8a2f90aa: [BoolTy, Uint256Ty, AddressTy, AddressTy],
  0x28863fcb: [BoolTy, StringTy, Uint256Ty, Uint256Ty],
  0x8e4ae86e: [BoolTy, StringTy, Uint256Ty, Uint256Ty],
  0x1ad96de6: [BoolTy, StringTy, Uint256Ty, StringTy],
  0x77a1abed: [BoolTy, StringTy, Uint256Ty, StringTy],
  0x6b0e5d53: [BoolTy, StringTy, Uint256Ty, BoolTy],
  0x20bbc9af: [BoolTy, StringTy, Uint256Ty, BoolTy],
  0x1596a1ce: [BoolTy, StringTy, Uint256Ty, AddressTy],
  0x5b22b938: [BoolTy, StringTy, Uint256Ty, AddressTy],
  0x7be0c3eb: [BoolTy, StringTy, StringTy, Uint256Ty],
  0x5ddb2592: [BoolTy, StringTy, StringTy, Uint256Ty],
  0x1762e32a: [BoolTy, StringTy, StringTy, StringTy],
  0x1e4b87e5: [BoolTy, StringTy, StringTy, BoolTy],
  0x97d394d8: [BoolTy, StringTy, StringTy, AddressTy],
  0x1606a393: [BoolTy, StringTy, BoolTy, Uint256Ty],
  0x8d6f9ca5: [BoolTy, StringTy, BoolTy, Uint256Ty],
  0x483d0416: [BoolTy, StringTy, BoolTy, StringTy],
  0xdc5e935b: [BoolTy, StringTy, BoolTy, BoolTy],
  0x538e06ab: [BoolTy, StringTy, BoolTy, AddressTy],
  0xa5cada94: [BoolTy, StringTy, AddressTy, Uint256Ty],
  0x1b0b955b: [BoolTy, StringTy, AddressTy, Uint256Ty],
  0x12d6c788: [BoolTy, StringTy, AddressTy, StringTy],
  0x6dd434ca: [BoolTy, StringTy, AddressTy, BoolTy],
  0x2b2b18dc: [BoolTy, StringTy, AddressTy, AddressTy],
  0x0bb00eab: [BoolTy, BoolTy, Uint256Ty, Uint256Ty],
  0x4667de8e: [BoolTy, BoolTy, Uint256Ty, Uint256Ty],
  0x7dd4d0e0: [BoolTy, BoolTy, Uint256Ty, StringTy],
  0x50618937: [BoolTy, BoolTy, Uint256Ty, StringTy],
  0x619e4d0e: [BoolTy, BoolTy, Uint256Ty, BoolTy],
  0xab5cc1c4: [BoolTy, BoolTy, Uint256Ty, BoolTy],
  0x54a7a9a0: [BoolTy, BoolTy, Uint256Ty, AddressTy],
  0x0bff950d: [BoolTy, BoolTy, Uint256Ty, AddressTy],
  0xe3a9ca2f: [BoolTy, BoolTy, StringTy, Uint256Ty],
  0x178b4685: [BoolTy, BoolTy, StringTy, Uint256Ty],
  0x6d1e8751: [BoolTy, BoolTy, StringTy, StringTy],
  0xb857163a: [BoolTy, BoolTy, StringTy, BoolTy],
  0xf9ad2b89: [BoolTy, BoolTy, StringTy, AddressTy],
  0x6d7045c1: [BoolTy, BoolTy, BoolTy, Uint256Ty],
  0xc248834d: [BoolTy, BoolTy, BoolTy, Uint256Ty],
  0x2ae408d4: [BoolTy, BoolTy, BoolTy, StringTy],
  0x3b2a5ce0: [BoolTy, BoolTy, BoolTy, BoolTy],
  0x8c329b1a: [BoolTy, BoolTy, BoolTy, AddressTy],
  0x4c123d57: [BoolTy, BoolTy, AddressTy, Uint256Ty],
  0x609386e7: [BoolTy, BoolTy, AddressTy, Uint256Ty],
  0xa0a47963: [BoolTy, BoolTy, AddressTy, StringTy],
  0xc0a302d8: [BoolTy, BoolTy, AddressTy, BoolTy],
  0xf4880ea4: [BoolTy, BoolTy, AddressTy, AddressTy],
  0x7bf181a1: [BoolTy, AddressTy, Uint256Ty, Uint256Ty],
  0x9bfe72bc: [BoolTy, AddressTy, Uint256Ty, Uint256Ty],
  0x51f09ff8: [BoolTy, AddressTy, Uint256Ty, StringTy],
  0xa0685833: [BoolTy, AddressTy, Uint256Ty, StringTy],
  0xd6019f1c: [BoolTy, AddressTy, Uint256Ty, BoolTy],
  0xee8d8672: [BoolTy, AddressTy, Uint256Ty, BoolTy],
  0x136b05dd: [BoolTy, AddressTy, Uint256Ty, AddressTy],
  0x68f158b5: [BoolTy, AddressTy, Uint256Ty, AddressTy],
  0xc21f64c7: [BoolTy, AddressTy, StringTy, Uint256Ty],
  0x0b99fc22: [BoolTy, AddressTy, StringTy, Uint256Ty],
  0xa73c1db6: [BoolTy, AddressTy, StringTy, StringTy],
  0xe2bfd60b: [BoolTy, AddressTy, StringTy, BoolTy],
  0x6f7c603e: [BoolTy, AddressTy, StringTy, AddressTy],
  0x07831502: [BoolTy, AddressTy, BoolTy, Uint256Ty],
  0x4cb60fd1: [BoolTy, AddressTy, BoolTy, Uint256Ty],
  0x4a66cb34: [BoolTy, AddressTy, BoolTy, StringTy],
  0x6a9c478b: [BoolTy, AddressTy, BoolTy, BoolTy],
  0x1c41a336: [BoolTy, AddressTy, BoolTy, AddressTy],
  0x0c66d1be: [BoolTy, AddressTy, AddressTy, Uint256Ty],
  0x5284bd6c: [BoolTy, AddressTy, AddressTy, Uint256Ty],
  0xd812a167: [BoolTy, AddressTy, AddressTy, StringTy],
  0x46600be0: [BoolTy, AddressTy, AddressTy, BoolTy],
  0x1d14d001: [BoolTy, AddressTy, AddressTy, AddressTy],
  0x34f0e636: [AddressTy, Uint256Ty, Uint256Ty, Uint256Ty],
  0x3d0e9de4: [AddressTy, Uint256Ty, Uint256Ty, Uint256Ty],
  0x4a28c017: [AddressTy, Uint256Ty, Uint256Ty, StringTy],
  0x89340dab: [AddressTy, Uint256Ty, Uint256Ty, StringTy],
  0x66f1bc67: [AddressTy, Uint256Ty, Uint256Ty, BoolTy],
  0xec4ba8a2: [AddressTy, Uint256Ty, Uint256Ty, BoolTy],
  0x20e3984d: [AddressTy, Uint256Ty, Uint256Ty, AddressTy],
  0x1ef63434: [AddressTy, Uint256Ty, Uint256Ty, AddressTy],
  0xbf01f891: [AddressTy, Uint256Ty, StringTy, Uint256Ty],
  0xf512cf9b: [AddressTy, Uint256Ty, StringTy, Uint256Ty],
  0x88a8c406: [AddressTy, Uint256Ty, StringTy, StringTy],
  0x7e56c693: [AddressTy, Uint256Ty, StringTy, StringTy],
  0xcf18105c: [AddressTy, Uint256Ty, StringTy, BoolTy],
  0xa4024f11: [AddressTy, Uint256Ty, StringTy, BoolTy],
  0x5c430d47: [AddressTy, Uint256Ty, StringTy, AddressTy],
  0xdc792604: [AddressTy, Uint256Ty, StringTy, AddressTy],
  0x22f6b999: [AddressTy, Uint256Ty, BoolTy, Uint256Ty],
  0x698f4392: [AddressTy, Uint256Ty, BoolTy, Uint256Ty],
  0xc5ad85f9: [AddressTy, Uint256Ty, BoolTy, StringTy],
  0x8e8e4e75: [AddressTy, Uint256Ty, BoolTy, StringTy],
  0x3bf5e537: [AddressTy, Uint256Ty, BoolTy, BoolTy],
  0xfea1d55a: [AddressTy, Uint256Ty, BoolTy, BoolTy],
  0xa31bfdcc: [AddressTy, Uint256Ty, BoolTy, AddressTy],
  0x23e54972: [AddressTy, Uint256Ty, BoolTy, AddressTy],
  0x100f650e: [AddressTy, Uint256Ty, AddressTy, Uint256Ty],
  0xa5d98768: [AddressTy, Uint256Ty, AddressTy, Uint256Ty],
  0x1da986ea: [AddressTy, Uint256Ty, AddressTy, StringTy],
  0x5d71f39e: [AddressTy, Uint256Ty, AddressTy, StringTy],
  0xa1bcc9b3: [AddressTy, Uint256Ty, AddressTy, BoolTy],
  0xf181a1e9: [AddressTy, Uint256Ty, AddressTy, BoolTy],
  0x478d1c62: [AddressTy, Uint256Ty, AddressTy, AddressTy],
  0xec24846f: [AddressTy, Uint256Ty, AddressTy, AddressTy],
  0x1dc8e1b8: [AddressTy, StringTy, Uint256Ty, Uint256Ty],
  0xa4c92a60: [AddressTy, StringTy, Uint256Ty, Uint256Ty],
  0x448830a8: [AddressTy, StringTy, Uint256Ty, StringTy],
  0x5d1365c9: [AddressTy, StringTy, Uint256Ty, StringTy],
  0x0ef7e050: [AddressTy, StringTy, Uint256Ty, BoolTy],
  0x7e250d5b: [AddressTy, StringTy, Uint256Ty, BoolTy],
  0x63183678: [AddressTy, StringTy, Uint256Ty, AddressTy],
  0xdfd7d80b: [AddressTy, StringTy, Uint256Ty, AddressTy],
  0x159f8927: [AddressTy, StringTy, StringTy, Uint256Ty],
  0xa14fd039: [AddressTy, StringTy, StringTy, Uint256Ty],
  0x5d02c50b: [AddressTy, StringTy, StringTy, StringTy],
  0x35a5071f: [AddressTy, StringTy, StringTy, BoolTy],
  0xa04e2f87: [AddressTy, StringTy, StringTy, AddressTy],
  0x515e38b6: [AddressTy, StringTy, BoolTy, Uint256Ty],
  0xe720521c: [AddressTy, StringTy, BoolTy, Uint256Ty],
  0xbc0b61fe: [AddressTy, StringTy, BoolTy, StringTy],
  0x5f1d5c9f: [AddressTy, StringTy, BoolTy, BoolTy],
  0x205871c2: [AddressTy, StringTy, BoolTy, AddressTy],
  0x457fe3cf: [AddressTy, StringTy, AddressTy, Uint256Ty],
  0x8c1933a9: [AddressTy, StringTy, AddressTy, Uint256Ty],
  0xf7e36245: [AddressTy, StringTy, AddressTy, StringTy],
  0x0df12b76: [AddressTy, StringTy, AddressTy, BoolTy],
  0x0d36fa20: [AddressTy, StringTy, AddressTy, AddressTy],
  0x386ff5f4: [AddressTy, BoolTy, Uint256Ty, Uint256Ty],
  0xc210a01e: [AddressTy, BoolTy, Uint256Ty, Uint256Ty],
  0x0aa6cfad: [AddressTy, BoolTy, Uint256Ty, StringTy],
  0x9b588ecc: [AddressTy, BoolTy, Uint256Ty, StringTy],
  0xc4643e20: [AddressTy, BoolTy, Uint256Ty, BoolTy],
  0x85cdc5af: [AddressTy, BoolTy, Uint256Ty, BoolTy],
  0xccf790a1: [AddressTy, BoolTy, Uint256Ty, AddressTy],
  0x0d8ce61e: [AddressTy, BoolTy, Uint256Ty, AddressTy],
  0x80e6a20b: [AddressTy, BoolTy, StringTy, Uint256Ty],
  0x9e127b6e: [AddressTy, BoolTy, StringTy, Uint256Ty],
  0x475c5c33: [AddressTy, BoolTy, StringTy, StringTy],
  0x50ad461d: [AddressTy, BoolTy, StringTy, BoolTy],
  0x19fd4956: [AddressTy, BoolTy, StringTy, AddressTy],
  0x8c4e5de6: [AddressTy, BoolTy, BoolTy, Uint256Ty],
  0xcfb58756: [AddressTy, BoolTy, BoolTy, Uint256Ty],
  0xdfc4a2e8: [AddressTy, BoolTy, BoolTy, StringTy],
  0xcac43479: [AddressTy, BoolTy, BoolTy, BoolTy],
  0xcf394485: [AddressTy, BoolTy, BoolTy, AddressTy],
  0xa75c59de: [AddressTy, BoolTy, AddressTy, Uint256Ty],
  0xdc7116d2: [AddressTy, BoolTy, AddressTy, Uint256Ty],
  0x2dd778e6: [AddressTy, BoolTy, AddressTy, StringTy],
  0xa6f50b0f: [AddressTy, BoolTy, AddressTy, BoolTy],
  0x660375dd: [AddressTy, BoolTy, AddressTy, AddressTy],
  0xbe553481: [AddressTy, AddressTy, Uint256Ty, Uint256Ty],
  0x54fdf3e4: [AddressTy, AddressTy, Uint256Ty, Uint256Ty],
  0xfdb4f990: [AddressTy, AddressTy, Uint256Ty, StringTy],
  0x9dd12ead: [AddressTy, AddressTy, Uint256Ty, StringTy],
  0x9b4254e2: [AddressTy, AddressTy, Uint256Ty, BoolTy],
  0xc2f688ec: [AddressTy, AddressTy, Uint256Ty, BoolTy],
  0x8da6def5: [AddressTy, AddressTy, Uint256Ty, AddressTy],
  0xd6c65276: [AddressTy, AddressTy, Uint256Ty, AddressTy],
  0xef1cefe7: [AddressTy, AddressTy, StringTy, Uint256Ty],
  0x04289300: [AddressTy, AddressTy, StringTy, Uint256Ty],
  0x21bdaf25: [AddressTy, AddressTy, StringTy, StringTy],
  0x6f1a594e: [AddressTy, AddressTy, StringTy, BoolTy],
  0x8f736d16: [AddressTy, AddressTy, StringTy, AddressTy],
  0x3971e78c: [AddressTy, AddressTy, BoolTy, Uint256Ty],
  0x95d65f11: [AddressTy, AddressTy, BoolTy, Uint256Ty],
  0xaa6540c8: [AddressTy, AddressTy, BoolTy, StringTy],
  0x2cd4134a: [AddressTy, AddressTy, BoolTy, BoolTy],
  0x9f1bc36e: [AddressTy, AddressTy, BoolTy, AddressTy],
  0x94250d77: [AddressTy, AddressTy, AddressTy, Uint256Ty],
  0xed5eac87: [AddressTy, AddressTy, AddressTy, Uint256Ty],
  0xf808da20: [AddressTy, AddressTy, AddressTy, StringTy],
  0x0e378994: [AddressTy, AddressTy, AddressTy, BoolTy],
  0x665bf134: [AddressTy, AddressTy, AddressTy, AddressTy],
};
