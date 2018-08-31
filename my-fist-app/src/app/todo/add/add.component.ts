import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToDoService } from '../../services/to-do.service';


@Component({
  selector: 'app-addtodo',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private toDoservice:ToDoService, private router:Router) { }

  newTaskvalue:string="";

  ngOnInit() {
    this.newTaskvalue="";
  }
  
  onClick() {
    this.toDoservice.identity+=1;
    this.toDoservice.taskAdded({
      Id:this.toDoservice.identity ,
      todo: this.newTaskvalue,
      IsDone: false
    });    
    
    this.newTaskvalue="";
    this.router.navigate(['todo']);
  }

}
