import { Component, OnInit, Input, Output, ApplicationRef, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { Person } from '../models/person';
import { Bank } from '../models/bank';
import { PersonService } from '../services/personService';
import { BankService } from '../services/bankService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() person: Person;
  @Output() updatePerson = new EventEmitter();

  banks: any = [];
  newbank: Bank = new Bank(); 
  
  changeFlag: Boolean = false;

  constructor( private ref: ChangeDetectorRef, private personService: PersonService, private bankService: BankService) { }

  ngOnInit() {
    this.updateBank();
  }

  addBank(){
    if (this.newbank.name == "" || this.newbank.country == "") {
      return;
    }
    console.log(this.newbank);
    this.bankService.addBank(this.newbank).then((res) => {
      this.updateBank();
    });
  }

  deletePerson(){
    this.personService.deletePerson(this.person.id).then((res) => {
      this.updatePerson.emit();
    });
  }

  change(){
    this.changeFlag = true;
  }

  changePerson(){
    this.personService.updatePerson(this.person.id, this.person).then((res) => {
      this.updatePerson.emit();
    });
  }

  updateBank() {
    this.bankService.getBanks(this.person.id).then((res) => {
        this.banks = res;
        this.ref.detectChanges();
    });
    this.newbank = new Bank();
    this.newbank.userid = this.person.id;
  }

}
