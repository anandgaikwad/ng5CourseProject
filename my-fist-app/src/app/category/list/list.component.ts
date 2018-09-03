import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cat',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListCatComponent implements OnInit {

  constructor( private router:Router, private catService:CategoryService) { }
 
  categoryList=this.catService.categoryList;

  ngOnInit() {
  }

  catSelected: {} = {};

  onSelected(catSelected) {
    this.catSelected = Object.assign({}, catSelected);;
    this.router.navigate(['/category', 'edit', catSelected.Id]);
  }

  onDeleted(taskSelected) {
    if (confirm('You want to delete this task, are you sure?')) {
     // this.catService.Deleted(taskSelected);
    }
  }
}
