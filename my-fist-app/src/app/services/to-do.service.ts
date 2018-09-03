import { Injectable } from '@angular/core';
import { ToDo } from '../models/todo';
import { Category } from '../models/category';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private categoryService:CategoryService) { }

  defaultCategory:Category=this.categoryService.getDefaultCategory();

  todolist=[new ToDo(1,'Create new components',true,this.defaultCategory),
            new ToDo(2,'Create example of property data binding',true,this.defaultCategory),
            new ToDo(3,'Create example of tow-way data binding',true,this.defaultCategory),
            new ToDo(4,'Create Child components',true,this.defaultCategory),
            new ToDo(5,'Link Child/multiple components',true,this.defaultCategory)];

  identity:number =5;

  taskAdded(newTask)
  {
    this.todolist.push(newTask);
  }
  
  taskupdated(task) {
    let listTask = this.todolist.filter(x => x.Id == task.Id)[0];
    listTask.todo = task.todo;
    listTask.IsDone = task.IsDone;
  }
            
  taskDeleted(task)
  {      
    //this.todolist= this.todolist.filter(x => x.Id !== task.Id);
    this.todolist.splice(this.todolist.indexOf(task), 1);
  }
  
  getToDo(id: number): ToDo {

    // var toDo = this.todos.find((o) => {
    //   return o.id == id;
    // });
    //return toDo;

    return this.todolist.find( o => o.Id == id );
  }
}
