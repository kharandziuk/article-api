import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {

  @Get()
    getHealth() {
      return {status: 'UP'}
    }

}

@Controller('healthcheck')
export class HealthcheckController {

  @Get()
    getHealth() {
      return {status: 'UP'}
    }

}
