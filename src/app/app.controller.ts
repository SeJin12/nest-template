import { Controller, Get, Head, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Head()
  getStatus() {
    this.appService.getStatus();
  }

  @Get()
  get(): string {
    return this.appService.get();
  }
}
