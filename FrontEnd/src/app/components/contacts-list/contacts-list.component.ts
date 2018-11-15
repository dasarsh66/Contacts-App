import { GetContactsService } from "./../../services/get-contacts.service";
import { FormsModule } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contacts-list",
  templateUrl: "./contacts-list.component.html",
  styleUrls: ["./contacts-list.component.css"]
})
export class ContactsListComponent implements OnInit {
  contacts;

  constructor(private contactsService: GetContactsService) {}

  delete(contact) {
    this.contacts.forEach((value, index) => {
      if (value.firstName === contact.firstName) {
        this.contacts.splice(index, 1);
      }
    });
    this.contactsService.delete(contact);
  }

  edit(contact) {
    this.contactsService.emitEmitContact(contact);
  }

  onSelect(contact) {
    this.contactsService.emitContact(contact);
  }

  ngOnInit() {
    this.contacts = [];

    this.contactsService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
    this.contactsService.editSave.subscribe(contact => {
      if (contact) {
        this.contacts.push(contact);
      }
    });

    this.contactsService.saveCont.subscribe(contact => {
      if (contact) {
        this.contacts.forEach((value, index) => {
          if (value.phoneNumber === contact.phoneNumber) {
            this.contacts.splice(index, 1);
          }
        });
        this.contacts.push(contact);
      }
    });
  }
}
