import { Component, ChangeDetectorRef } from '@angular/core';
import { Person } from './models/person';
import { PersonService } from './services/personService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  persons: any = [];
  newperson: Person = new Person();

  constructor( private ref: ChangeDetectorRef, private personService: PersonService) {

  }

  ngOnInit(): void {
    this.personService.getAllPersons().then((res) => {
      this.persons = res;
    }, (err) => {

    });
  }

  addPerson(){
    if (this.newperson.name == "" || this.newperson.address == "") {
      return;
    }
    console.log(this.newperson);
    this.personService.addPerson(this.newperson).then((res) => {
      this.updatePerson();
    });
  }
  
  updatePerson() {
    this.personService.getAllPersons().then((res) => {
        this.persons = res;
        this.ref.detectChanges();
    });
    this.newperson = new Person();
  }
}
