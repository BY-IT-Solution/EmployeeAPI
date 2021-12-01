import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { employeeInformation } from '../models/employeeInformation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  employeeInformation : Array<employeeInformation> =[];
  constructor(private httpClient:HttpClient){

  }

  ngOnInit(){
    this.httpClient.get('https://localhost:44315/api/EmployeeInfo').subscribe((response :Array<employeeInformation>)=>{
      this.employeeInformation = response;
    });
  }
}
