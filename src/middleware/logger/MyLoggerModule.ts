import { Module } from '@nestjs/common';
import { MyLogger } from '@src/middleware/logger/MyLogger';

@Module({
  providers: [MyLogger],
  exports: [MyLogger],
})
export class LoggerModule {}
