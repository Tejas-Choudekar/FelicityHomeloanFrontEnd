import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RouterModule } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ApplicationComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'app-calculator', component: CalculatorComponent },
      { path: 'app-application', component: ApplicationComponent },
      { path: 'app-home-page', component: HomePageComponent }
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'felicityHomeLoan';
}
