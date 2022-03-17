import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../model/employee';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  employees : Employee[]=[];
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) 
  { 

  }

  ngOnInit(): void 
  {
    this.employeeService.getEmployees().subscribe((x)=>{ this.employees=x });
    //this.stockService.getStock(100).subscribe((x)=>{this.stocks.push(x)});
  }

  delEmployee(event: any, index: any) 
  {  
    let id=this.employees[index].id;
    
    this.employeeService.delEmployee(id)  
      .subscribe((data: any) => 
      {  
        console.log(data);  
        this.ngOnInit();
      });

    //this.stockService.getStocks().subscribe(x =>{ this.stocks=x },   
    //  (error: any) => { return console.log(error); });
  }
}







