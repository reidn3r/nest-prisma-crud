import { Injectable } from "@nestjs/common"
import { Type } from "class-transformer"
import { IsInt, IsNotEmpty, IsString, Min } from "class-validator"

@Injectable()
export class FindByAuthorDTO {

    @IsString()
    @IsNotEmpty()
    name: string
    

    @IsInt()
    @Type(() => Number)
    @Min(1)
    @IsNotEmpty()
    page: number
}