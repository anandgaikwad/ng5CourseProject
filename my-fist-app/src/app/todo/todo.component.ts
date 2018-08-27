import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  todolist=[{Id:1,todo:'Create new components',  IsDone:true},
            {Id:2,todo:'Create example of property data binding', IsDone:true},
            {Id:3,todo:'Create example of tow-way data binding',  IsDone:true},
            {Id:4,todo:'Create Child components',  IsDone:true},
            {Id:5,todo:'Link Child/multiple components', IsDone:true}
          ];

  selectedToDoItem:number=1;
  onSelected(event,item)
  {
    this.selectedToDoItem=item.Id;
  }

  newTaskAdded(newTask)
  {
    this.todolist.push(newTask);
  }  
}
