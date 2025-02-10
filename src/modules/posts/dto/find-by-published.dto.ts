import { Injectable } from "@nestjs/common";
import { IsBooleanString } from "class-validator";

@Injectable()
export class FindByPublishedDTO {
    
    @IsBooleanString()
    published: string

}