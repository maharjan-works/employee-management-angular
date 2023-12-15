import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/employee";

  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  getEmployeeById(employeeId:string):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${employeeId}`);
  }

  updateEmployee(employeeId: string, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${employeeId}`, employee);
  }

  deleteEmployee(employeeId: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${employeeId}`);
  }
  
}
