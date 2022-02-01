export interface Todo {
    id:string;
    desc:string;
    complete:boolean;
}
export interface TodoState{
    todoCount:number;
    todos:Todo[];
    completed:number;
    pending: number;
}