import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  amount: number;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(amount: number): void {
    this.amount = amount;
  }

}
