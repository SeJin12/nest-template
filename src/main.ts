import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { MyLogger } from '@loader/logger/MyLogger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
   
  const configService = app.get(ConfigService);
  console.log(configService.get('PORT'));
  

  app.useLogger(new MyLogger());
  await app.listen(3000);
}
bootstrap();
