import { GetContactsService } from "./../../services/get-contacts.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent implements OnInit {
  contact;

  constructor(private contactsService: GetContactsService) {}

  submit(contact) {
    this.contactsService.newContact(contact);
    this.contactsService.create(contact);
  }

  edit(contact) {
    this.contactsService.saveEdit(contact);
    this.contactsService.edit(contact);
  }

  createNewContact() {
    this.contact = null;
  }

  ngOnInit() {
    this.contactsService.editContact.subscribe(contact => {
      this.contact = contact;
    });
  }
}
