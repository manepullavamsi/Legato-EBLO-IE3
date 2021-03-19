import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PreviewComponent } from '../preview/preview.component';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  emp:Employee = new Employee();
  
  
  checked =false;
  c=0;
  constructor(private dataserve:DataserviceService,private router:Router ) { }
  toggleSelection(event)
  {
    this.c+=1
    if(this.c%2!=0)
    this.checked=true;
    else
    this.checked=false;
  }

  
  ngOnInit(): void {
    
    
  }
  signupform = new FormGroup({
    empName: new FormControl('',[Validators.required,Validators.minLength(4)]),
    orgName: new FormControl('',[Validators.required,Validators.minLength(4)]),
    empId: new FormControl('',[Validators.required,Validators.minLength(4)]),
    empEmail: new FormControl('',[Validators.email, Validators.required,Validators.minLength(8)]),
    mobile: new FormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    image:new FormControl('',Validators.required)
  }
  )
  get password(){
    return this.signupform.get('password');
  }
  get mobile(){
    return this.signupform.get('mobile');
  }
  get empEmail(){
    return this.signupform.get('empEmail');
  }
  get empId(){
    return this.signupform.get('empId');
  }
  get empName(){
    return this.signupform.get('empName');
  }

  get orgName(){
    return this.signupform.get('orgName');
  }
  // get emp():Employee
  // {
  //   return this.dataservice.sharedData;
  // }
  // set emp(value:Employee)
  // {
  //   this.dataservice.sharedData=value;
  // }
  

  onFileChanged(event) {
    const file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event => {
    this.emp.image = reader.result.toString();
    })
  }
  submit(){
    this.emp.empName1=this.signupform.value.empName;
    this.emp.orgName1=this.signupform.value.orgName;
    this.emp.empId1=this.signupform.value.empId;
    this.emp.empEmail1=this.signupform.value.empEmail;
    this.emp.mobile1=this.signupform.value.mobile;
    this.emp.password1=this.signupform.value.password;
    this.dataserve.setuserData(this.emp);
    console.log(this.emp);
    this.router.navigate(["/preview"]);
    
  }

}
