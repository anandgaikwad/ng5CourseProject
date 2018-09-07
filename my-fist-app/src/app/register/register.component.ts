import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { resolve } from 'dns';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //userRegistrationForm:FormGroup;
  constructor() { }

  ngOnInit() {

    

  }
  userRegistrationForm=new FormGroup({
    'userName' : new FormControl(''),
    'userEmail' : new FormControl('',[Validators.required,Validators.email]),
   'userGender': new FormControl('Male'),
    'userPassword' : new FormControl('',[Validators.required,Validators.minLength(6)]),
    'userConfirmPassword' : new FormControl('',[Validators.required],this.checkConfirmPassWord)
  });
  genders=['Male','Female'];
  // convenience getter for easy access to form fields
  get f() { return this.userRegistrationForm.controls; }

  registerUser()
  {
    console.log(this.userRegistrationForm);
  }
  
  checkConfirmPassWord(control:FormControl):Observable<any> | Promise<any>
  {
    const promise=new Promise((resolve,reject)=> {
      setTimeout(() => {
        if(control.parent.controls['userPassword'].value!==control.value)
        {
          resolve({message:'Password and confirm password fields do not match',result: true});
        }
        else
        resolve(null);

      }, 2000);
    });

    return promise;
  }
}