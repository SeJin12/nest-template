import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { MyLogger } from '@src/middleware/logger/MyLogger';
import { ConfigService } from '@nestjs/config';

const logger = new MyLogger();
logger.setContext('main.ts');

/* cors default value
  {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }
*/

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    logger: new MyLogger(),
    cors : { // cors #1
      origin: ['http://localhost:3000', '*']
      , optionsSuccessStatus: 200
      , maxAge: 300
      , credentials: true
    }
  });

  // cors #2
  // app.enableCors({origin: '*'});

  const configService = app.get(ConfigService);
  const port = configService.get('http.port');

  await app.listen(port);
  logger.appLog(`Application listening on port ${port}`)
}
bootstrap();
