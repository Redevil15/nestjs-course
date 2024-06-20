import { IsNotEmpty, isNotEmpty } from "class-validator";
export class CreatetaskDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    description: string;
}