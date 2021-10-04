import { Test, TestingModule } from '@nestjs/testing';
import { TinkoffController } from './tinkoff.controller';

describe('TinkoffController', () => {
  let controller: TinkoffController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TinkoffController],
    }).compile();

    controller = module.get<TinkoffController>(TinkoffController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
