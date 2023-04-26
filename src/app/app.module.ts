import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankingComponent } from './shared/banking/banking.component';
import { InvestmentsComponent } from './shared/investments/components/lists/investments.component';

@NgModule({
  declarations: [
    AppComponent,
    BankingComponent,
    InvestmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
