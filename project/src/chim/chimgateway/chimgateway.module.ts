import { Module } from '@nestjs/common';
import { ChimgatewayGateway } from './chimgateway.gateway';

@Module({
  providers: [ChimgatewayGateway]
})
export class ChimgatewayModule {}
