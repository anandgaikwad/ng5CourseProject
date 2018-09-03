import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-editTodo',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  taskToEdit:{}={};
  id:number;
  constructor(private toDoService:ToDoService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {    
    this.id=this.route.snapshot.params['id'];
    this.taskToEdit=Object.assign({},this.toDoService.getToDo(this.id));

    this.route.params.subscribe((params:Params)=>{
      this.id=params['id'];
      this.taskToEdit=Object.assign({},this.toDoService.getToDo(this.id));
    });

  }   
  
  onClick(taskToEdit) {     
    this.toDoService.taskupdated(taskToEdit);
    this.taskToEdit={};
    this.router.navigate(['todo']);
  }
}