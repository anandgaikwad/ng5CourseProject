import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToDoService } from '../../services/to-do.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';


@Component({
  selector: 'app-addtodo',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private toDoservice:ToDoService,private categoryService:CategoryService, private router:Router) { }

  newTaskvalue:string="";
  categoryList:Category[]=this.categoryService.categoryList;
  selectedcategory:number=this.categoryService.defaultCategory.Id;
  
  ngOnInit() {
    this.newTaskvalue="";
  }
  
  onClick() {
    this.toDoservice.identity+=1;
    let category= this.categoryService.getCategoryById(this.selectedcategory);
    this.toDoservice.taskAdded({
      Id:this.toDoservice.identity ,
      todo: this.newTaskvalue,
      IsDone: false,
      category:category
    });    
    
    this.newTaskvalue="";
    this.router.navigate(['todo']);
  }

}
