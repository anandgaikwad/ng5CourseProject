import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() todolist;
  
  taskSelected:{}={};
  constructor() { }

  ngOnInit() {
  }

  onSelected(taskSelected)
  {
  this.taskSelected= Object.assign({}, taskSelected);; 
  }

  taskupdated(task)
  {      
    let listTask= this.todolist.filter(x => x.Id == task.Id)[0];
    listTask.todo=task.todo;
    listTask.IsDone=task.IsDone;
  }

  onDeleted(taskSelected)
  {  
  if(confirm('You want to delete this task, are you sure?'))
  {
    this.taskDeleted(taskSelected);
  }
  }

  taskDeleted(task)
  {      
    //this.todolist= this.todolist.filter(x => x.Id !== task.Id);
    this.todolist.splice(this.todolist.indexOf(task), 1);
  }
}
