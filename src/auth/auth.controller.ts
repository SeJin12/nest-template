import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from './dto/user.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register')
    registerAccount(@Body() userDTO: UserDTO): Promise<any> {
        return this.authService.register(userDTO);
    }

    @Post('login')
    async login(@Body() userDTO: UserDTO, @Res() res: Response): Promise<any> {
        const jwt = await this.authService.validate(userDTO);
        res.setHeader('Authorization', 'Bearer ' + jwt.accessToken);
        return res.json();
    }

}