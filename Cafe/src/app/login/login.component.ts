import { Component, OnInit } from '@angular/core';
import {LoginAuth} from '../login-auth'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: LoginAuth = new LoginAuth();
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  loginForm =new FormGroup({
    email : new FormControl('',[Validators.email,Validators.required]),
    password : new FormControl('',Validators.required)
  })

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  logIn()
  {
    this.user.empEmail1= this.loginForm.value.email;
    this.user.password= this.loginForm.value.password;
    if(this.user.empEmail1==this.user.password)
    this.route.navigate(['/preview'])
    else
    {
      console.log("please enter valid details");
      alert("Invalid UserName or Password Could you try again!!!");
    }
    
  }

}
