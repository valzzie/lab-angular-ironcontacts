import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    console.log("Add contact has been called");
      console.log(this.newContact);
      //adds the contact to the form
      this.contacts.push(this.newContact);
    // add contact to contacts list
    // clear inputs
  }

}

// Using *ngFor, display the name, email, phoneNumber, and image of the contact.
