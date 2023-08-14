import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { LoggerModule } from '@src/loader/logger/MyLoggerModule';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '@src/config/configuration';

@Module({
  imports: [ConfigModule,LoggerModule, ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
