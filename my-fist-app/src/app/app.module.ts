import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { AddComponent } from './todo/add/add.component';
import { ListComponent } from './todo/list/list.component';
import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { EditComponent } from './todo/edit/edit.component';
import { CategoryComponent } from './category/category.component'
import { AddCatComponent } from './category/add/add.component';
import { EditCatComponent } from './category/edit/edit.component';
import { ListCatComponent } from './category/list/list.component';
import { RegisterComponent } from './register/register.component';

const appRoutes:Routes =[
  {
  path:'',
  component: ListComponent
  },
  {
    path:'todo',
    component: ListComponent,
    children:
    [
      { path:'add', component: AddComponent },
      { path:'edit/:id', component: EditComponent }
    ]
  },
  {
    path:'category', component:ListCatComponent,
    children:
    [
      { path:'add', component:AddCatComponent  },
      { path:'edit/:id', component:EditCatComponent }     
    ]
  },
  {
    path:'register', component:RegisterComponent    
  } 

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    AddCatComponent,
    ListCatComponent,
    EditCatComponent,
    CategoryComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
