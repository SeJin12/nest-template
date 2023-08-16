import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService
    ) {}

    async register(userDto: UserDTO): Promise<UserDTO> {
        // const isUser = userDto.userId === 'admin'? true: false;

        // if(userDto) {
        //     throw new HttpException('already user!', HttpStatus.BAD_REQUEST);
        // }

        return userDto;
    }

    async validate(userDto: UserDTO): Promise<{accessToken: string} | undefined> {
        // let id = userDto.userId === 'admin' ? true : false;
        // let pw = userDto.userPw === 'admin' ? true : false;
        
        // if(!userDto) {
        //     throw new UnauthorizedException();
        // }

        const payload = {id: 1, userId: userDto.userId};

        return {
            accessToken: this.jwtService.sign(payload)
        }
    }

}
