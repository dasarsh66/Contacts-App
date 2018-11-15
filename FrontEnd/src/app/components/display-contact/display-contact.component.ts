import { GetContactsService } from "./../../services/get-contacts.service";
import { Component, OnInit } from "@angular/core";
import { Contact } from "../../contact";

@Component({
  selector: "app-display-contact",
  templateUrl: "./display-contact.component.html",
  styleUrls: ["./display-contact.component.css"]
})
export class DisplayContactComponent implements OnInit {
  selectedContact: Contact;

  constructor(private contactsService: GetContactsService) {}

  ngOnInit() {
    this.contactsService.selectedContact.subscribe(contact => {
      this.selectedContact = contact;
    });
  }
}
