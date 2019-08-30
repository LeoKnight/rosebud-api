import { Injectable } from '@nestjs/common';

export enum cryptoType {
  decode = 'decode',
  encode = 'encode',
}

export enum unicodeType {
  utf8 = 'utf8',
  ascii = 'ascii',
}

interface Base64Arg {
  type: cryptoType;
  unicode: unicodeType;
  value: string;
}

@Injectable()
export class CryptoService {

  async base64({
    type,
    unicode = unicodeType.utf8,
    value,
  }: Base64Arg) {
    if (type === cryptoType.encode) {
      return Buffer.from(value).toString('base64');
    } else if (type === cryptoType.decode) {
      return Buffer.from(value, 'base64').toString(unicode);
    }
  }
}
