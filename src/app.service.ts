import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello world! ${process.env.VARIABLE_TO_SHOW} !`
  }
}
