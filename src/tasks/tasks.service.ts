import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v1 as uuidv1 } from 'uuid';
import { CreatetaskDto } from './dto/create-task-dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    };

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    };

    createTask(createTaskDto: CreatetaskDto): Task {
        const { title, description } = createTaskDto;
        const task: Task = {
            id: uuidv1(),
            title,
            description,
            status: TaskStatus.OPEN
        };

        this.tasks.push(task);
        return task;
    };

    deleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id!== id);
    }
   

}
