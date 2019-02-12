import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RouterModule } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { FileuploadComponent } from './fileUpload/fileupload/fileupload.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login-service';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ApplicationComponent,
    FileuploadComponent,
    LoginComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'app-calculator',component:CalculatorComponent},
      {path:'app-application',component:ApplicationComponent},
      {path:'app-fileupload',component:FileuploadComponent},
      {path:'app-login',component:LoginComponent},  
      { path: 'app-home-page', component: HomePageComponent }
    ]),
    AppRoutingModule
  ],
  providers: [HttpClient,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'felicityHomeLoan';
}
