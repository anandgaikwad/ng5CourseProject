import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../../models/todo';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private toDoService:ToDoService ) { }

  ngOnInit() {
  }

  todolist:ToDo[]=this.toDoService.todolist;
  
  taskSelected:{}={};

  onSelected(taskSelected)
  {
  this.taskSelected= Object.assign({}, taskSelected);; 
  }

  onDeleted(taskSelected)
  {  
  if(confirm('You want to delete this task, are you sure?'))
  {
    this.toDoService.taskDeleted(taskSelected);
  }
  }
}
