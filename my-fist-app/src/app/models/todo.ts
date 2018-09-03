import { Category } from "./category";

export class ToDo {
    public Id: number;
    public todo: string;
    public IsDone: boolean;
    public category:Category;

    constructor(Id: number, todo: string, Isdone: boolean, category:Category) {
        this.Id = Id;
        this.todo = todo;
        this.IsDone = Isdone;
        this.category=category;
    }
}