import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employeeId: string ='';
  employee:Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];
    this.employeeService.getEmployeeById(this.employeeId).subscribe(data => {
      this.employee = data;
    },
    error => console.log(error));
  }

  saveUpdate(){
    this.employeeService.updateEmployee(this.employeeId,this.employee).subscribe(data =>{
      this.routeEmployeeList();
    },
     error => console.log(error));
  }

  routeEmployeeList(){
    this.router.navigate(['/employee']);
  }

}
