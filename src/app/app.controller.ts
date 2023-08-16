import { Controller, Get, Head, HostParam, HttpCode, Ip, Logger, Param, Query, Redirect, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) { }

  @Head()
  getStatus() {
    this.appService.getStatus();
  }

  @Get()
  get(): string {
    return this.appService.get();
  }

  @Get('express')
  @HttpCode(200)
  getExpress(@Req() req, @Res() res, @Ip() ip) {
    this.appService.getExpress(req, ip);
    res.send('OK');
  }

  @Get('redirect')
  @Redirect('https://nestjs.com', 301)
  getRedirect() {
    this.appService.getRedirect();
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    this.appService.getDocs();
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get('param/:id')
  getParam(@Param('id') id: any): string {
    return `id: ${id}`
  }

  @Get('params/:id/:user')
  getParams(@Param('id') id: string, @Param('user') user: string): string {
    return `id: ${id}, user: ${user}`
  }

}
