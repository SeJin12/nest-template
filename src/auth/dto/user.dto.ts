import { IsNumber, IsOptional, IsString } from "class-validator";

export class UserDTO {

    @IsNumber()
    @IsOptional()
    readonly id: number;

    @IsString()
    readonly userId: string;

    @IsString()
    readonly userPw: string;
}