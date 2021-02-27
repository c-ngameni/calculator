import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Calculatrice';
  isAuthenticated = false;
  secondes: number;
  counterSubscription: Subscription;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.isAuthenticated = this.authenticationService.isAuthenticated;
  }

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.error('An error occured:', error);
      },
      () => {
        console.log('Observable completed!');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

  onLogIn() {
    this.authenticationService.logIn()
      .then(() => {
        console.log('Vous avez été connecté.');
        this.isAuthenticated = this.authenticationService.isAuthenticated;
        this.router.navigate(['/calculatrice']);
      });
  }

  onLogOut() {
    this.authenticationService.logOut();
    console.log('Vous avez été déconnecté.');
    this.isAuthenticated = this.authenticationService.isAuthenticated;
  }

}
