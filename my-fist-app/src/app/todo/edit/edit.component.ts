import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ToDoService } from '../../services/to-do.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { ToDo } from '../../models/todo';

@Component({
  selector: 'app-editTodo',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  taskToEdit:ToDo;
  id:number;
  selectedcategory:number;
  constructor(private toDoService:ToDoService,private categoryService:CategoryService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {    
    this.id=this.route.snapshot.params['id'];
    this.taskToEdit=Object.assign({},this.toDoService.getToDo(this.id));
    this.selectedcategory=this.taskToEdit.category.Id;

    this.route.params.subscribe((params:Params)=>{
      this.id=params['id'];
      this.taskToEdit=Object.assign({},this.toDoService.getToDo(this.id));
      this.selectedcategory=this.taskToEdit.category.Id;
    });
  }   

  categoryList:Category[]=this.categoryService.categoryList;
  
  onClick(taskToEdit) {     
    this.taskToEdit.category= this.categoryService.getCategoryById(this.selectedcategory);
    this.toDoService.taskupdated(taskToEdit);
    this.taskToEdit=null;
    this.router.navigate(['todo']);
  } 
}