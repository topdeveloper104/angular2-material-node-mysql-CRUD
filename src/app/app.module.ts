import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BankComponent } from './bank/bank.component';
import { AccountComponent } from './account/account.component';

import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Services
import { PersonService } from './services/personService';
import { BankService } from './services/bankService';
import { AccountService } from './services/accountService';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BankComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdNativeDateModule
  ],
  providers: [
    PersonService,
    BankService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
