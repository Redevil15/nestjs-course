import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
//import { TaskStatus } from "../tasks.model"

export class GetTaskFilterDto {
    @IsOptional()
    // @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    // status: TaskStatus;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}