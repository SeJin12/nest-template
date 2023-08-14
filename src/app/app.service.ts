import { Injectable } from '@nestjs/common';
import { MyLogger } from '@loader/logger/MyLogger';

@Injectable()
export class AppService {

  constructor(private myLogger: MyLogger) {
    this.myLogger.setContext(AppService.name);
  }

  getStatus(): void { 
    this.myLogger.appLog('/ [HEAD] checking status!')
  }

  get(): string { 
    return 'Hello World!';
  }
}
