import {IsNotEmpty} from "class-validator";

export class PreviousCheckDto {

    problemId: number;

    @IsNotEmpty()
    content: string;

}
