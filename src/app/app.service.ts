import { Injectable } from '@nestjs/common';
import { MyLogger } from '@src/middleware/logger/MyLogger';

@Injectable()
export class AppService {

  constructor(private myLogger: MyLogger) {
    this.myLogger.setContext(AppService.name);
  }

  getStatus(): void { 
  }

  get(): string {
    return 'Hello World!';
  }

  getExpress(req, ip): void {
  }

  getRedirect(): void {
  }

  getDocs(): void {
  }

}
