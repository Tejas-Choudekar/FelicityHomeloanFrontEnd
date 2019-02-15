import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RouterModule } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login-service';
import { HomePageComponent } from './home-page/home-page.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { IncomeDetailComponent } from './income-detail/income-detail.component';
import { LoanDetailComponent } from './loan-detail/loan-detail.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { ApplicationSuccessfulComponent } from './application-successful/application-successful.component';
import { FileUploadComponent } from './file-upload/fileupload.component';
import { PropertyDetailService } from './property-detail/propertyDetail-service';
import { IncomeDetailService } from './income-detail/incomeDetail-service';
import { LoanDetailService } from './loan-detail/loanDetail-service';
import { PersonalDetailService } from './personal-detail/personalDetail-service';
import { SharedService } from './shared-service';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ApplicationComponent,
    FileUploadComponent,
    LoginComponent,
    HomePageComponent,
    PropertyDetailComponent,
    IncomeDetailComponent,
    LoanDetailComponent,
    PersonalDetailComponent,
    ApplicationSuccessfulComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'homeLoan-calculator', component: CalculatorComponent },
      { path: 'homeLoan-application', component: ApplicationComponent },
      { path: 'homeLoan-fileUpload', component: FileUploadComponent },
      { path: 'homeLoan-login', component: LoginComponent },
      { path: 'homeLoan-home-page', component: HomePageComponent },
      { path: 'homeloan-property-detail', component: PropertyDetailComponent },
      { path: 'homeloan-income-detail', component: IncomeDetailComponent },
      { path: 'homeloan-loan-detail', component: LoanDetailComponent },
      { path: 'homeloan-personal-detail', component: PersonalDetailComponent },
      { path: 'homeloan-application-successful', component: ApplicationSuccessfulComponent },
      { path: 'homeloan-admin-dashboard', component: AdminDashboardComponent },
      { path: 'homeloan-user-dashboard', component: UserDashboardComponent },
      { path: 'homeloan-about-us', component: AboutUsComponent }
    ]),
    AppRoutingModule
  ],
  providers: [HttpClient, LoginService, PropertyDetailService, IncomeDetailService, LoanDetailService, PersonalDetailService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
