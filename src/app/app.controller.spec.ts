import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '@app/app.service';
import { AppController } from '@app/app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('/', () => {
    it('HEAD', () => {
      expect(appController.getStatus()).toBe(undefined);
    })

    it('GET"', () => {
      expect(appController.get()).toBe('Hello World!');
    });
    
  });
});
