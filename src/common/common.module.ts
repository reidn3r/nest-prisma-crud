import { Module } from '@nestjs/common';
import { Prisma } from './prisma/prisma.provider';

@Module({
  providers: [Prisma],
})
export class CommonModule {}
