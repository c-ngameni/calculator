import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CalculationResultsComponent } from './calculator/calculation-results/calculation-results.component';

import { CalculatorService } from './services/calculator.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { UserComponent } from './user/user.component';
import { UserAdditionComponent } from './user-addition/user-addition.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent,
    PageNotFoundComponent,
    CalculationResultsComponent,
    UserComponent,
    UserAdditionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CalculatorService, AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
