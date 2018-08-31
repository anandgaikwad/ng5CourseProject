import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { AddComponent } from './todo/add/add.component';
import { ListComponent } from './todo/list/list.component';
import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { EditComponent } from './todo/edit/edit.component'

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
      {
        path:'add',
        component: AddComponent,
      },
      {
        path:'edit/:id',
        component: EditComponent    
      }
    ]
  },
  

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    AddComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
