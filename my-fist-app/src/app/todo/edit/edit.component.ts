import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-editTodo',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  @Input() taskToEdit:{}={};
  @Output() taskEdited =new EventEmitter<{Id:number, todo:string,  IsDone:boolean}>();
  constructor() { }

  ngOnInit() {
    
  }   
  
  onClick(taskToEdit) {     
    this.taskEdited.emit(taskToEdit);
    //this.taskToEdit={};
  }
}