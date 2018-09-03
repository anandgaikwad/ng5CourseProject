import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';


@Component({
  selector: 'app-add-Cat',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddCatComponent implements OnInit {

  constructor(private catService:CategoryService,private router:Router) { }

  ngOnInit() {
  }

  addCategory(categoryform)
  { 
    if(categoryform.valid)
    {
      console.log(categoryform);
      let cat = new Category(-1,'');
      cat.CategoryName=categoryform.value.ctrlCatName;
  
      this.catService.addCategory(cat);
      this.router.navigate(['category']);
    }
 
  }
}
