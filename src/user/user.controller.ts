import { Controller,UseInterceptors, Get, Post,Put,Delete,UsePipes,UseGuards, Body,Req,Res,Param ,HttpStatus,HttpException} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user-dto";
import {Response,Request} from 'express';
import { UserService} from './user.service'
import {User} from './interfaces/user.interface';
import {ValidationPipe} from '../Pipes/validation.pipe';
import {RolesGuard} from '../Guard/role.guard';
import {Roles} from '../Decorator/roles.decorator';
import {TimeoutInterceptor} from '../Interceptors/cancel.interceptor'
@Controller('user')
@UseInterceptors(TimeoutInterceptor)
@UseGuards(RolesGuard)
export class UserController {
    constructor(private readonly userService : UserService){

    }
    @Get()
    // @Roles('admin')
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }
    
    // findALL (){
    //     throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    // }
    @Get(':id')
    async findOne(@Param('id') id):Promise<User>{
        return await this.userService.findOne(id);
    }
    @Post()
    @UsePipes( new ValidationPipe())
    create(@Body() createUserDto:CreateUserDto){
        return this.userService.create(createUserDto);
    }
    @Delete(':id')
    delete(@Param('id') id) {
        return this.userService.delete(id);
    }
    @Put(":id")
    update (@Body() updateUserDto:CreateUserDto,@Param('id') id){
        return this.userService.update(id,updateUserDto);
    }
}
