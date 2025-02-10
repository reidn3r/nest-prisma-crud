import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Posts, User } from '@prisma/client';
import { Prisma } from 'src/common/prisma/prisma.provider';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';
import { UpdateUserDTO } from 'src/user/dto/update-user.dto';
import { UnionType } from 'typescript';

@Injectable()
export class UserService {
  constructor(private prisma: Prisma) {}

  async listAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: number): Promise<User | null> {
    const foundUser = await this.prisma.user.findUnique({
      where: {
        id
      },
    });
    return foundUser;
  }

  async findByCpf(cpf: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        cpf
      }
    })
  }
  
  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email
      }
    })
  }

  async createUser(data: CreateUserDTO): Promise<User> {
    try {
      const [foundByEmail, foundByCpf] = await Promise.all([
        this.findByCpf(data.cpf),
        this.findByEmail(data.email)
      ])

      if(foundByCpf) throw new HttpException("CPF já cadastrado", HttpStatus.BAD_REQUEST);
      if(foundByEmail) throw new HttpException("Email já cadastrado", HttpStatus.BAD_REQUEST);
      
      return await this.prisma.user.create({ data });
    } catch (err) {
        throw new HttpException(err instanceof Error ? err.message : "Erro interno do servidor", 500);
    }
  }

  async deleteByCPF(cpf: string): Promise<User> {

    const foundUser = await this.findByCpf(cpf);
    if(!foundUser) throw new HttpException("Usuário nao encontrado", HttpStatus.NOT_FOUND);

    return this.prisma.user.delete({
      where: { cpf },
    });
  }

  async updateUser(data: UpdateUserDTO): Promise<User> {
    const { id, ...rest } = data;

    const foundUser = await this.findById(data.id);
    if(!foundUser) throw new HttpException("Usuario nao encontrado", HttpStatus.NOT_FOUND);

    return this.prisma.user.update({
      where: {
        id
      },
      data: {
        ...rest,
        updatedAt: new Date()
      }
    })
  }
}
