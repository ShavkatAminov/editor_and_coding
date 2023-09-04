import {Transform} from "class-transformer";


export class ListDto {
    @Transform(({ value }) => parseInt(value))
    page: number = 0;
    @Transform(({ value }) => parseInt(value))
    perPage: number = 10;
}
