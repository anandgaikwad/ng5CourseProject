import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditCatComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private catService:CategoryService) { }

  catToEdit:{}={};
  Id:number;

  ngOnInit() {

    this.Id=this.route.snapshot.params['id'];
    this.catToEdit=Object.assign({}, this.catService.getCategoryById(this.Id));
    console.log(this.Id);
    this.route.params.subscribe((params:Params)=>{

      this.Id=this.route.snapshot.params['id'];
      this.catToEdit=Object.assign({}, this.catService.getCategoryById(this.Id));      
    });
  }

  updateCategory(categoryform)
  {
    if(categoryform.valid)
    {
      this.catService.updateCategory(this.catToEdit);
      this.catToEdit={};
      this.router.navigate(['category']);
    }

  }

}
