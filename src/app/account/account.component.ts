import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../models/person';
import { Bank } from '../models/bank';
import { Account } from '../models/account';

import { AccountService } from '../services/accountService';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() person: Person;
  @Input() bank: Bank;
  @Input() account: Account;
  @Output() updateAccount = new EventEmitter();

  changeFlag: Boolean = false;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  deleteAccount(){
    console.log("click delete account", this.person.id, this.bank.id, this.account.id);
    this.accountService.deleteAccount(this.account.id).then((res) => {
      this.updateAccount.emit();
    });
  }

  change(){
    console.log("asdfasdf", this.account.opendate);
    this.changeFlag = true;
  }

  changeAccount(){
    console.log(this.account);
    this.accountService.updateAccount(this.account.id, this.account).then((res) => {
      this.updateAccount.emit();
    });
  }
}
