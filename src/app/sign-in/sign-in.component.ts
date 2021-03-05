import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  errorMessage: string;
  passwordHelpColor = 'blue';

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const credentials = {
      username: this.signInForm.value['email'],
      password: this.signInForm.value['password']
    }

    this.authenticationService.logIn(credentials);
    // this.authenticationService.logIn(credentials).then(
    //   () => {
    //     console.log(`L'utilisateur est bien connecté.`);
    //     this.router.navigate(['/accueil']);
    //   },
    //   (error: any) => this.errorMessage = error
    // );
  }

}
