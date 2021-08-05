import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'enregistrement', component: SignUpComponent },
  { path: 'connexion', component: SignInComponent },
  { path: 'accueil', component: HomeComponent },
  { path: 'calculatrice', component: CalculatorComponent },
  { path: 'utilisateurs', component: UserComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page.
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
