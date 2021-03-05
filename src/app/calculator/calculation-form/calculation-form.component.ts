import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculation-form',
  templateUrl: './calculation-form.component.html',
  styleUrls: ['./calculation-form.component.css']
})
export class CalculationFormComponent implements OnInit {

  @Output() notifyFormSubmission = new EventEmitter<number>();

  calculationForm: FormGroup;
  isFormSubmitted: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.calculationForm = this.formBuilder.group({
      amount: [null, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    this.isFormSubmitted = true;
    const amount = this.calculationForm.value['amount'];
    this.notifyFormSubmission.emit(amount);
  }

}
