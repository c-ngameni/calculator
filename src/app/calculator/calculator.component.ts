import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  amount = 0;
  isFormSubmitted = false;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.isFormSubmitted = true;
    this.amount = +form.value['amount'];
    console.log('Montant = ' + this.amount);
  }

}
