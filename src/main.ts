import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { MyLogger } from '@loader/logger/MyLogger';
import { ConfigService } from '@nestjs/config';

const logger = new MyLogger();
logger.setContext('main.ts');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    logger: new MyLogger()
  });

  const configService = app.get(ConfigService);
  const port = configService.get('http.port');

  await app.listen(port);
  logger.appLog(`Application listening on port ${port}`)
}
bootstrap();
