import { Injectable } from '@nestjs/common';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
} from 'class-validator';
import { IsCPF } from 'class-validator-cpf';

@Injectable()
export class CreateUserDTO {
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsCPF()
  cpf: string;
}
