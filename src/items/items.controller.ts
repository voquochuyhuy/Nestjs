import { Controller, Get, Post,Put,Delete, Body,Req,Res,Param } from '@nestjs/common';
import {CreateItemDto} from "./dto/create-item-dto";
import {Response,Request} from 'express';
import { ItemsService} from './items.service'
import { UserService } from "../user/user.service";
import {Item} from './interfaces/items.interface';
import {User} from '../user/interfaces/user.interface';
@Controller('items')
export class ItemsController {
    constructor(private readonly itemService : ItemsService,
        private readonly userService : UserService  ){

    }
    @Get()
    async findAll(): Promise<User[]> {
        // return await this.itemService.findAll();
        return await this.userService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id):Promise<Item>{
        return await this.itemService.findOne(id);
    }
    @Post()
    create(@Body() createItemDto:CreateItemDto){
        return this.itemService.create(createItemDto);
    }
    @Delete(':id')
    delete(@Param('id') id) {
        return this.itemService.delete(id);
    }
    @Put(":id")
    update (@Body() updateItemDto:CreateItemDto,@Param('id') id){
        return this.itemService.update(id,updateItemDto);
    }
}
