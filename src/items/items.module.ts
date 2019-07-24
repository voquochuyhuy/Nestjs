import { Module } from '@nestjs/common';
import {ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './items.entity';

import { UserModule } from 'src/user/user.module';
@Module({
  imports: [TypeOrmModule.forFeature([Items]),UserModule],
  controllers: [ ItemsController],
  providers: [ ItemsService],
})
export class ItemsModule {}