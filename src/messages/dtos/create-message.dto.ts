import { IsString, IsNotEmpty } from "class-validator";

export class CreateMessagesDto {
    @IsString({
        message: "The content should be a string"
    })
    @IsNotEmpty({
        message: "The content should be not null"
    })
    content: string;

    constructor(content: string) {
        this.content = content;
    }
}