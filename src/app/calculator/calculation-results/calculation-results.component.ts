import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CalculationResult } from 'src/app/models/calculation-result.model';

@Component({
  selector: 'app-calculation-results',
  templateUrl: './calculation-results.component.html',
  styleUrls: ['./calculation-results.component.css']
})
export class CalculationResultsComponent implements OnInit, OnChanges {

  @Input() amount: number;

  currencyCode = 'EUR';

  // Compte d'autonomie financière
  amountCAF: number;
  // Compte d'amusement
  amountCA: number;
  // Compte d'économie à long terme
  amountCELT: number;
  // Compte d'instruction
  amountCI: number;
  // Compte de nécessité
  amountCN: number;
  // Compte de dons
  amountCD: number;

  results: CalculationResult[];

  constructor() { }

  ngOnInit(): void {
    this.calculateAmounts();
  }

  ngOnChanges(): void {
    this.calculateAmounts();
  }

  private calculateAmounts() {
    const tenthAmount = this.amount / 10;
    this.amountCAF = tenthAmount;
    this.amountCA = tenthAmount;
    this.amountCELT = tenthAmount;
    this.amountCI = tenthAmount;
    this.amountCN = this.amount - (tenthAmount * 5);
    this.amountCD = tenthAmount;
  }

  onSaveResults() {
    this.results.push({
      month: null,
      amountCAF: this.amountCAF,
      amountCA: this.amountCA,
      amountCELT: this.amountCELT,
      amountCI: this.amountCI,
      amountCN: this.amountCN,
      amountCD: this.amountCD
    });
  }

}
