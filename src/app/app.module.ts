import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { LoggerModule } from '@src/loader/logger/MyLoggerModule';
import { ConfigModule } from '@nestjs/config';
import config from '@src/config/config';

@Module({
  imports: [LoggerModule, ConfigModule.forRoot({
    load: [config],
    isGlobal: true, 
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
