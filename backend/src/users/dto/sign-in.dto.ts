import { IsEmail, IsNotEmpty } from 'class-validator';
export class SignInDto {

    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;
}
