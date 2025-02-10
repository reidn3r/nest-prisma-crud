import { Injectable } from "@nestjs/common";
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, MinLength } from "class-validator";
import { IsCPF } from "class-validator-cpf";

@Injectable()
export class UpdateUserDTO {

    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    id: number

    @IsOptional()
    @IsString()
    @MinLength(3)
    name: string;
    
    @IsEmail()
    @IsOptional()
    email: string;
    
    @IsCPF()
    @IsOptional()
    cpf: string;
}