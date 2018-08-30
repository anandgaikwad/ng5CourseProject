import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-editTodo',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  @Input() taskToEdit:{}={};

  constructor(private toDoService:ToDoService ) { }

  ngOnInit() {    
  }   
  
  onClick(taskToEdit) {     
    this.toDoService.taskupdated(taskToEdit);
    this.taskToEdit={};
  }
}