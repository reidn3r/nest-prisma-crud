import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from 'src/common/prisma/prisma.provider';
import { CreatePostDTO } from '../dto/create-post.dto';
import { Posts } from '@prisma/client';

@Injectable()
export class PostsService {

    private numOfPosts:number = 10;

    constructor(private prisma: Prisma){}

    async findAll(): Promise<Posts[]> {
        return this.prisma.posts.findMany();
    }

    async findByAuthorName(page:number, name: string): Promise<Posts[]> {
        return this.prisma.posts.findMany({
            where: {
                author: {
                    name
                }
            },
            take: this.numOfPosts,
            skip: (page-1) * this.numOfPosts
        })
    }

    async findByPublished(published: boolean): Promise<Posts[]> {
        return this.prisma.posts.findMany({
            where: {
                published
            }
        })
    }

    async createPost(data: CreatePostDTO): Promise<Posts> {
        const foundAuthor = await this.prisma.user.findUnique({
            where: {
                id: data.userId
            }
        })

        if(!foundAuthor) throw new HttpException("Autor nao encontrado", HttpStatus.NOT_FOUND);

        return this.prisma.posts.create({
            data: {
                content: data.content,
                title: data.title,
                published: data.published,
                author: {
                    connect: {
                        id: foundAuthor.id
                    }
                }
            }
        })
    }
}
