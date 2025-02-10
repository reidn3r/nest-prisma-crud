import { Module } from '@nestjs/common';
import { PostsController } from '../controller/posts.controller';
import { Prisma } from 'src/common/prisma/prisma.provider';
import { PostsService } from '../provider/posts.service';
import { CreatePostDTO } from '../dto/create-post.dto';

@Module({
    imports: [CreatePostDTO],
    controllers:[PostsController],
    providers: [Prisma, PostsService]
})
export class PostsModule {}
