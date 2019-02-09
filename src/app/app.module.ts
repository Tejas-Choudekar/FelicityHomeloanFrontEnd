import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EligibilityCalculatorComponent } from './Calculator/EligibilityCalculator.component';
import { CalculatorService } from './Calculator/CalculatorService';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,EligibilityCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'eligibility-component',component:EligibilityCalculatorComponent},
     
    ])

  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
