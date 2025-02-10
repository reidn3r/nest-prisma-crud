import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { Prisma } from 'src/common/prisma/prisma.provider';
import { UserService } from '../provider/service/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, Prisma],
})
export class UserModule {}
