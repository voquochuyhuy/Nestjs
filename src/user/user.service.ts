import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import {CreateUserDto} from "./dto/create-user-dto";
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
      ) {}
        
    async findAll ():Promise<User[]>{
        return await this.userRepository.find();
    }
    async findOne (_id:string):Promise<User>{
        return await this.userRepository.findOne({id:_id});
    }
    async create (user:CreateUserDto){
        return await this.userRepository.insert(user);   
    }
    async update (_id:string,user:CreateUserDto){
        return await this.userRepository.save({...user,id:_id}) 
    }
    async delete (_id:string){
        return await this.userRepository.delete({id:_id});
        
    }
}
