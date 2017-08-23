import { Component, OnInit, Input, Output, ApplicationRef, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Person } from '../models/person';
import { Bank } from '../models/bank';
import { Account } from '../models/account';
import { BankService } from '../services/bankService';
import { AccountService } from '../services/accountService';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  @Input() person: Person;
  @Input() bank: Bank;
  @Output() updateBank = new EventEmitter();

  accounts: any = [];
  newaccount: Account = new Account() 

  changeFlag: Boolean = false;

  constructor( private ref: ApplicationRef, private bankService: BankService, private accountService: AccountService) { }

  ngOnInit() {
    this.updateAccount();
    
  }

  addAccount(){
    if (this.newaccount.name == "" || this.newaccount.type == "" || this.newaccount.opendate == null) {
      return;
    }
    this.accountService.addAccount(this.newaccount).then((res) => {
      this.updateAccount();
    });
  }

  deleteBank(){
    this.bankService.deleteBank(this.bank.id).then((res) => {
      this.updateBank.emit();
    });
  }

  change(){
    this.changeFlag = true;
  }

  changeBank(){
    this.bankService.updateBank(this.bank.id, this.bank).then((res) => {
      this.updateBank.emit();
    });
  }

  updateAccount() {
    this.accountService.getAccounts(this.person.id, this.bank.id).then((res) => {
        this.accounts = res;
        this.ref.tick();
    });
    this.newaccount = new Account();
    this.newaccount.userid = this.person.id;
    this.newaccount.bankid = this.bank.id;
  }
}
