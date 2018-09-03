import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { 
    this.addCategory(new Category(1,"Inbox"));
  }

  categoryIdentity:number=0;
  defaultCategory:Category=new Category(1,"Inbox");
  categoryList:Category[]=[];

  getDefaultCategory()
  {
    return this.defaultCategory;
  }

  getCategoryById(id:number)
  {
    return this.categoryList.find(c => c.Id==id);
  }

  addCategory(category:Category)
  {
    this.categoryIdentity+=1;
    category.Id=this.categoryIdentity;
    this.categoryList.push(category);
  }
 
  updateCategory(category)
  {
    this.getCategoryById(category.Id).CategoryName=category.CategoryName;;
  }
  

}
