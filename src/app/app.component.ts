import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Calculatrice';
  isAuthenticated = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.authenticationService.isAuthenticatedSubject.subscribe((isAuthenticated: boolean) => {
      this.isAuthenticated = isAuthenticated;
      this.logIn();
    });
    this.authenticationService.emitAuthenticationStatus();
  }

  onSignUp() {
    this.router.navigateByUrl('/enregistrement');
  }

  onLogIn() {
    this.isAuthenticated = this.authenticationService.isAuthenticated;
    this.logIn();
  }

  onLogOut() {
    this.authenticationService.logOut();
    this.isAuthenticated = this.authenticationService.isAuthenticated;
    this.router.navigateByUrl('/connexion');
  }

  private logIn() {
    if (!this.isAuthenticated) {
      this.router.navigate(['/connexion']);
    } else {
      this.router.navigate(['/accueil']);
    }
  }

}
