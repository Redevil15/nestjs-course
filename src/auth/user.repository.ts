import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";

@Injectable()
export class UserRepository extends Repository<User> {
    async signUp(AuthCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { username, password } = AuthCredentialsDto;

       

        const user = new User();

        user.username = username;
        user.password = password;
        try {
            await user.save();
        } catch (error) {
            if(error.code === '23505') { // username duplicate
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException()
            }
        }
    }
}