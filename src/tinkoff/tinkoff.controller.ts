import { Controller } from '@nestjs/common';
import { TinkoffService } from './tinkoff.service';
import { Get } from '@nestjs/common';

@Controller('tinkoff')
export class TinkoffController {
  constructor(private readonly tinkoffService: TinkoffService) {}

  @Get()
  getAppl() {
    return this.tinkoffService.getAppl();
  }
}
