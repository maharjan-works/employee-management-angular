import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[] | undefined;
  
  constructor() { }

  ngOnInit(): void {
    this.employeeList = [{
      "employeeId":"EMP101",
      "firstName":"Joe",
      "lastName": "Biden",
      "emailId": "joe.biden@gmail.com"
    },
    {
      "employeeId":"EMP102",
      "firstName":"Kamala",
      "lastName": "Harris",
      "emailId": "kamala.harris@gmail.com"
    }

    ]
  }

}
