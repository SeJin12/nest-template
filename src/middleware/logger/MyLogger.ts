import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class MyLogger extends ConsoleLogger {
  constructor() {
    super();
    this.setLogLevels(['verbose', 'debug', 'log', 'warn', 'error']);
  }

  appLog(msg: string) {
    if (process.env.NODE_ENV === 'PROD') {
      this.log(msg);
    } else { // DEV
      this.debug(msg);
    }
  }

  errorLog(msg: string) {
    this.error(msg);
  }
}
