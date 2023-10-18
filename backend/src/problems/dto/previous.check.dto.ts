import {IsNotEmpty} from "class-validator";

export class CheckDto {

    problemId: number;

    @IsNotEmpty()
    content: string;

    fullTest: boolean = false;

}
