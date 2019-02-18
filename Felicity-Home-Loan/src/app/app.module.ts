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
import { UserDashboardService } from './user-dashboard/user-dashboard_service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminLoginService } from './admin-login/admin-login-service';
import { LoanStatusComponent } from './loan-status/loan-status.component';
import { LoanStatusService } from './loan-status/loanStatus-service';



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
    AboutUsComponent,
    AdminLoginComponent,
    LoanStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'homeloan-calculator', component: CalculatorComponent },
      { path: 'homeloan-application', component: ApplicationComponent },
      { path: 'homeloan-fileUpload', component: FileUploadComponent },
      { path: 'homeloan-login', component: LoginComponent },
      { path: 'homeloan-home-page', component: HomePageComponent },
      { path: 'homeloan-property-detail', component: PropertyDetailComponent },
      { path: 'homeloan-income-detail', component: IncomeDetailComponent },
      { path: 'homeloan-loan-detail', component: LoanDetailComponent },
      { path: 'homeloan-personal-detail', component: PersonalDetailComponent },
      { path: 'homeloan-application-successful', component: ApplicationSuccessfulComponent },
      { path: 'homeloan-admin-dashboard', component: AdminDashboardComponent },
      { path: 'homeloan-user-dashboard', component: UserDashboardComponent },
      { path: 'homeloan-about-us', component: AboutUsComponent },
      { path: 'homeloan-admin-login', component: AdminLoginComponent }
    ]),
    AppRoutingModule
  ],
  providers: [HttpClient, LoginService, PropertyDetailService, IncomeDetailService, LoanDetailService, PersonalDetailService, SharedService, UserDashboardService, LoanStatusService,AdminLoginService],
  
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
