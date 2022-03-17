//import { Component, OnInit } from '@angular/core';
import { Component, createPlatform, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Employee } from '../model/employee';

import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
    isConfirmed: boolean=false;
    msg: string="";
    employee!: Employee;
    eName: string="";
    
    public myForm!: FormGroup;
    constructor(private employeeService : EmployeeService) { 
      this.employee=new Employee(0, "", 0, new Date(0));
      this.createForm();
    }
  
  
    ngOnInit(): void {
    }
  
    createForm()
    {
      this.myForm=new FormGroup({
        eName: new FormControl(null, [Validators.required]),
        basicpay: new FormControl(null, [Validators.required, Validators.min(10000), Validators.max(99999)]),
        doj: new FormControl(new Date(0), [Validators.required])
      });
    }
  
    mySubmit()
    {
      this.msg=`Employee Name ${this.employee.name} Basic Pay ${this.employee.basicPay} Date of Joining ${this.employee.dateOfJoining}`;
      this.employeeService.addEmployee(this.employee).subscribe((x)=>{console.log(x)});
    }
    toggleConfirmed()
    {
      if(this.myForm.valid)
      {
        this.isConfirmed=!this.isConfirmed;
      }
    }
    get name()
    {
      return this.myForm.get('name');
    }
    get basicPay()
    {
      return this.myForm.get('basicPay');
    }
    get dateOfJoining()
    {
      return this.myForm.get('dateOfJoining');
    }
  }