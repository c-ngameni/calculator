import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-addition',
  templateUrl: './user-addition.component.html',
  styleUrls: ['./user-addition.component.css']
})
export class UserAdditionComponent implements OnInit {

  userForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    const formValue = this.userForm.value;
    const user = new User( formValue['firstName'], formValue['lastName'], formValue['email']);
    this.userService.addUser(user);
    this.router.navigate(['/utilisateurs']);
  }

}
