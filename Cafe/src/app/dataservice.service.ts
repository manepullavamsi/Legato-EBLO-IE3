import { Injectable } from '@angular/core';
import {Employee} from './employee'
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  data:Employee;
  
  setuserData(sdata:Employee)
  {
    console.log("dataservice");
    console.log(sdata);
    this.data=sdata;
  }
  getuserData()
  {
    return this.data;
  }
  constructor() { }
}
