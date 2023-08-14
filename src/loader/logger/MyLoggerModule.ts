import { Module } from '@nestjs/common';
import { MyLogger } from '@loader/logger/MyLogger';

@Module({
  providers: [MyLogger],
  exports: [MyLogger],
})
export class LoggerModule {}
