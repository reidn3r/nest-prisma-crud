import { IsBoolean, IsInt, IsNotEmpty, IsPositive, IsString, MaxLength } from "class-validator"

export class CreatePostDTO {

    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    title: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(256)
    content: string

    @IsNotEmpty()
    @IsBoolean()
    published: boolean

    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    userId: number

}