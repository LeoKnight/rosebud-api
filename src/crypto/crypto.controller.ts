import { Controller, Get, Query, Param } from '@nestjs/common';
import { CryptoService } from './crypto.service';

@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) { }

  @Get('base63/encode/:value')
  encodeBase64(
    @Param() params,
  ) {
    return params.value;
  }

}
