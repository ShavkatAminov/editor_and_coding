import {Injectable, NotFoundException} from '@nestjs/common';
import {Repository} from "typeorm";
import {User} from "./entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {SignUpDto} from "./dto/sign-up.dto";
import {LoginDto} from "./dto/login.dto";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private jwtService: JwtService,
    ) {}

    async signIn(signUpDto: SignUpDto) {
        let user = new User();
        user.email = signUpDto.email;
        user.firstname = signUpDto.firstname;
        user.username = signUpDto.username;
        user.lastname = signUpDto.lastname;
        user.password = signUpDto.password;
        user = await this.usersRepository.save(user);
        return this.addToken(user);
    }

    async login(loginDto: LoginDto) {
        let user = await this.usersRepository.findOne({where: {username: loginDto.username}});
        if(user && user.password == loginDto.password) {
            return this.addToken(user);
        }
        else {
            throw new NotFoundException('Login or password is incorrect');
        }
    }

    private async addToken(user: User) {
        return {
            access_token: await this.jwtService.signAsync({
                username: user.username,
                sub: user.id
            }),
            ...user,
        }
    }
}
