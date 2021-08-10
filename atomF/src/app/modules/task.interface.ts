import { TaskPriority } from "./task-priority.enum";

export interface Task {
    name: string;
    priority: TaskPriority;
    assignee: string;
    done: boolean;
    estimation: number;
    description: string;
    tags: string[];
}

export interface ITaskController {
    toggleTask(task: Task): void;
    changeTaskName(newName: string): void;
}