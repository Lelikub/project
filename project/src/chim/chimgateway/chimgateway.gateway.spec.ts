import { Test, TestingModule } from '@nestjs/testing';
import { ChimgatewayGateway } from './chimgateway.gateway';

describe('ChimgatewayGateway', () => {
  let gateway: ChimgatewayGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChimgatewayGateway],
    }).compile();

    gateway = module.get<ChimgatewayGateway>(ChimgatewayGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
