import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculation-results',
  templateUrl: './calculation-results.component.html',
  styleUrls: ['./calculation-results.component.css']
})
export class CalculationResultsComponent implements OnInit {

  @Input() amount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
