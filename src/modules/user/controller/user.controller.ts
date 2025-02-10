import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from '../provider/service/user.service';
import { CreateUserDTO } from '../dto/create-user.dto';
import { UpdateUserDTO } from '../dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('all')
  @HttpCode(200)
  async findAll(): Promise<User[]> {
    return this.userService.listAll();
  }

  @Post('create')
  @HttpCode(201)
  async createUser(@Body() data: CreateUserDTO): Promise<User> {
    return this.userService.createUser(data);
  }

  @Delete('delete')
  @HttpCode(200)
  async deleteUser(@Query('cpf') cpf: string): Promise<User> {
    return this.userService.deleteByCPF(cpf);
  }


  @Put("update")
  @HttpCode(200)
  async updateUser(@Body() data: UpdateUserDTO): Promise<User> {
    return this.userService.updateUser(data);
  }
}
