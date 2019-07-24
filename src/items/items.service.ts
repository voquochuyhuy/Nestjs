import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Items } from './items.entity';
import { CreateItemDto } from "./dto/create-item-dto";
@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Items)
        private readonly itemsRepository: Repository<Items>,
    ) { }
    async findAll(): Promise<Items[]> {
        return await this.itemsRepository.find();
    }
    async findOne(_id: string): Promise<Items> {
        return await this.itemsRepository.findOne({ id: _id });
    }
    async create(user: CreateItemDto) {
        return await this.itemsRepository.insert(user);
    }
    async update(_id: string, user: CreateItemDto) {
        return await this.itemsRepository.save({ ...user, id: _id })
    }
    async delete(_id: string) {
        return await this.itemsRepository.delete({ id: _id });

    }
}
