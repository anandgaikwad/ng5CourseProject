export class ToDo {
    public Id: number;
    public todo: string;
    public IsDone: boolean;

    constructor(Id: number, todo: string, Isdone: boolean) {
        this.Id = Id;
        this.todo = todo;
        this.IsDone = Isdone;
    }
}