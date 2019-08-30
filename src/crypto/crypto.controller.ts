import { Controller, Get, Query, Param } from '@nestjs/common';
import { unicodeType, cryptoType, CryptoService } from './crypto.service';

@Controller('api/crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) { }

  @Get('base63/encode/:value')
  encodeBase64(
    @Param() params,
  ) {
    return this.cryptoService.base64({
      type: cryptoType.encode,
      unicode: unicodeType.utf8,
      value: params.value,
    });
  }

  @Get('base63/decode/:value')
  decodeBase64(
    @Param() params,
  ) {
    return this.cryptoService.base64({
      type: cryptoType.decode,
      unicode: unicodeType.utf8,
      value: params.value,
    });
  }

}
