import { Component, OnInit, Input } from '@angular/core';

import { Employee } from '../employee';
import { empty } from 'rxjs';
import { DataserviceService } from '../dataservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  employee:Employee;
  
  constructor(private dataserve:DataserviceService,private router:Router ) { 
    
  }
  
  
  
  ngOnInit(): void {
    this.employee=this.dataserve.getuserData();
    console.log(this.employee);
    
  }

  Submit()
  {
    console.log(this.employee);
    console.log("sucessfully Logged in");
    this.router.navigate(["/login"]);
  }
  
  



}
