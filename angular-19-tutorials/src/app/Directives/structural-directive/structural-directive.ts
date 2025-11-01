import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule, NgIf, NgFor, FormsModule],
  templateUrl: './structural-directive.html',
  styleUrl: './structural-directive.css',
})
export class StructuralDirective {
  [x: string]: any;

  //variables for structural ngif or if directive
  input1: String = '';
  input2: String = '';


  //example for ngfor directive.

  array: number[] = [10, 20, 30, 40, 4, 33, 44,];


  employeeList: any[] = [
    { empid: 21, empname: 'rahul', empDept: 'Engg', empEmail: 'rahul@gmail.com' },
    { empid: 43, empname: 'Prashant', empDept: 'ITI', empEmail: 'prashant@gmail.com' },
    { empid: 55, empname: 'Swati', empDept: 'Agri', empEmail: 'swati@gmail.com' }
  ];

  varValue: any = '';

  switchOption: number = 0;
  setClass(x: number) {
    this.switchOption = x;
  }

}
