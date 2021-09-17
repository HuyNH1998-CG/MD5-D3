import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1: number = 0;
  num2: number = 0;
  total: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  plus(num1: number, num2: number): number {
    this.total = num1 + num2;
    return this.total;
  }
  minus(num1:number, num2:number):number{
    this.total = num1 - num2;
    return this.total;
  }
  divide(num1:number, num2:number):number{
    this.total = num1/num2;
    return this.total;
  }
  multiply(num1:number, num2:number):number{
    this.total = num1*num2;
    return this.total;
  }
}
