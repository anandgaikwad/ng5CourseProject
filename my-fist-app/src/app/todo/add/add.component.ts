import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Output() taskAdded =new EventEmitter<{Id:number, todo:string,  IsDone:boolean}>();

  constructor() { }

  newTaskvalue:string="";

  ngOnInit() {
    this.newTaskvalue="";
  }
  identity:number =5;

  onClick() {
    this.identity+=1;
    this.taskAdded.emit({
      Id:this.identity ,
      todo: this.newTaskvalue,
      IsDone: true
    });    
    
    this.newTaskvalue="";
  }

}
