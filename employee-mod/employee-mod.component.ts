import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-mod',
  templateUrl: './employee-mod.component.html',
  styleUrls: ['./employee-mod.component.css']
})

export class EmployeeModComponent implements OnInit 
{
  isConfirmed: boolean=false;
  msg: string="";
  employee!: Employee;
  eDate: string="";
  date!: Date;
  public myForm!: FormGroup;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) 
  { 
    this.employee=new Employee(0, '', 0, new Date());
    this.createForm();
  }

  ngOnInit(): void 
  {
    console.log("In ngOnInit()")
    this.route.params.subscribe((parameters)=>
    {
        this.employeeService.getEmployee(parseInt(parameters['id'])).subscribe((x)=>
        {
          this.employee=x? x: null;
          let tmpDate=this.employee.dateOfJoining;
          this.date=this.jsonToDate(new Date(this.employee.dateOfJoining));
        });
    });
  }
  createForm()
  {
    this.myForm=new FormGroup({
      eName: new FormControl(null, [Validators.required]),
      basicPay: new FormControl(null, [Validators.required, Validators.min(10000), Validators.max(99999)]),
      doj: new FormControl(new Date(0), [Validators.required])
    });
  }

  mySubmit(): void
  {
    this.employee.dateOfJoining=this.date;
    this.msg=`Employee Name ${this.employee.name} Basic Pay ${this.employee.basicPay} Date of Joining ${this.employee.dateOfJoining}`;
    this.employeeService.updateEmployee(this.employee).subscribe((x)=>{console.log(x)});
  }

  myReset()
  {
    this.toggleConfirmed()
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

  jsonToDate(date: Date): Date 
  {
    date.setDate(date.getDate());
    return date;
  }
}



