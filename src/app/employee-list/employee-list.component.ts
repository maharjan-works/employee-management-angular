import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit(): void {
   this.getEmployeeList();
  }

  private getEmployeeList(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employeeList = data;
    });
  }

  updateEmployee(employeeId: string){
    this.router.navigate([`update-employee`, employeeId]);
  }

  deleteEmployee(employeeId: string){
    this.router.navigate(['delete-employee',employeeId])
  }

}
