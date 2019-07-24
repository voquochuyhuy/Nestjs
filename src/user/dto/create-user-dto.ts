import { IsString, IsInt, IsBoolean } from 'class-validator';
export class CreateUserDto{
    @IsString()
    readonly id:string;
    @IsString()
    readonly name:string;
    @IsInt()
    readonly age: number;
    @IsBoolean()
    readonly gender : boolean;
}