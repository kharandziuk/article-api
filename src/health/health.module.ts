import { Module } from '@nestjs/common';
import { HealthController, HealthcheckController } from './health.controller';

@Module({
  controllers: [HealthController, HealthcheckController]
})
export class HealthModule {}
