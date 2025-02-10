import { Body, Controller, Get, HttpCode, Query, Post, Param } from '@nestjs/common';
import { CreatePostDTO } from '../dto/create-post.dto';
import { PostsService } from '../provider/posts.service';
import { Posts } from '@prisma/client';
import { FindByAuthorDTO } from '../dto/find-by-author.dto';
import { FindByPublishedDTO } from '../dto/find-by-published.dto';

@Controller('posts')
export class PostsController {

    constructor(private postsService:PostsService){}

    @Post("/create")
    @HttpCode(201)
    async createPost(@Body() data:CreatePostDTO): Promise<Posts> {
        return this.postsService.createPost(data);
    }
    
    @Get("/all")
    @HttpCode(200)
    async findAll(): Promise<Posts[]> {
        return this.postsService.findAll();
    }

    @Get("/author")
    @HttpCode(200)
    async findByAuthorName(@Query() data: FindByAuthorDTO): Promise<Posts[]> {
        return this.postsService.findByAuthorName(data.page, data.name);
    }

    @Get("/published/:published")
    @HttpCode(200)
    async findByPublishedStatus(@Param() data: FindByPublishedDTO): Promise<Posts[]> {
        const isPublished:boolean = data.published === "true";

        return this.postsService.findByPublished(isPublished);
    }
}
