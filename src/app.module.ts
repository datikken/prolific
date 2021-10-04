import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TinkoffService } from './tinkoff/tinkoff.service';
import { ConfigModule } from '@nestjs/config';
import { TinkoffController } from './tinkoff/tinkoff.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, TinkoffController],
  providers: [AppService, TinkoffService],
})
export class AppModule {}
