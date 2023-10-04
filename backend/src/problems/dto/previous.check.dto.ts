import {IsNotEmpty} from "class-validator";

export class PreviousCheckDto {

    @IsNotEmpty()
    problemId: number;

    @IsNotEmpty()
    content: string;

}
