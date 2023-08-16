import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { LoggerModule } from '@src/middleware/logger/MyLoggerModule';
import { ConfigModule } from '@nestjs/config';
import config from '@src/config/config';
import { LoggerFastify } from '@src/middleware/logger/logger.fastify';
import { AuthController } from '@src/auth/auth.controller';
import { AuthService } from '@src/auth/auth.service';
import { AuthModule } from '@src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [LoggerModule, ConfigModule.forRoot({
    load: [config],
    isGlobal: true,
  }), JwtModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerFastify) // OR LoggerExpress
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
