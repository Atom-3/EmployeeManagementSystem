
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl: string = 'http://localhost:4022/employee/';
  private httpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', 'localhost:4200'); 
  
  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<any> 
  {
    return this.httpClient.get(`${this.baseUrl}` + 'findAll');
  }

  getEmployee(id: number): Observable<any> {
    console.log("getEmployee() id is: "+id)
    return this.httpClient.get(`${this.baseUrl}find/${id}`);
  }

  addEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}` + 'insert', employee, { headers: this.httpHeaders });
  }

  updateEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}` + 'update', employee, { headers: this.httpHeaders });
  }

  delEmployee(id: number): Observable<Object> {
    console.log(id);
    return this.httpClient.delete(`${this.baseUrl}delete/${id}`);
  }
}
