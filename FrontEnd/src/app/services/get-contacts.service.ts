import { Contact } from "./../contact";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import axios from "axios";

@Injectable({
  providedIn: "root"
})
export class GetContactsService {
  private contactSource = new BehaviorSubject<Contact>(null);
  selectedContact = this.contactSource.asObservable();

  private editSource = new BehaviorSubject<Contact>(null);
  editContact = this.editSource.asObservable();

  private editDestin = new BehaviorSubject<Contact>(null);
  editSave = this.editDestin.asObservable();

  private saveContact = new BehaviorSubject<Contact>(null);
  saveCont = this.saveContact.asObservable();

  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get("http://localhost:8080/phonebook/v1/api/phonebooks");
    // return [
    //   {
    //     id: 1,
    //     firstName: "A",
    //     lastname: "Manikonda",
    //     phoneNumber: "9999999",
    //     workphone: "6666666",
    //     address: "address ###",
    //     company: "Google inc",
    //     email: "dasarshmanikonda@gmail.com"
    //   },
    //   {
    //     id: 2,
    //     firstName: "B",
    //     lastname: "Manikonda",
    //     phoneNumber: "9999999",
    //     workphone: "6666666",
    //     address: "address ###",
    //     company: "Google inc",
    //     email: "dasarshmanikonda@gmail.com"
    //   },
    //   {
    //     id: 3,
    //     firstName: "C",
    //     lastname: "Manikonda",
    //     phoneNumber: "9999999",
    //     workphone: "6666666",
    //     address: "address ###",
    //     company: "Google inc",
    //     email: "dasarshmanikonda@gmail.com"
    //   }
    // ];
  }

  delete(contact) {
    axios.delete(
      `http://localhost:8080/phonebook/v1/api/phonebook/${contact.phoneNumber}`
    );

    // this.http.delete(
    //   `http://localhost:8080/phonebook/v1/api/phonebook/${contact.phoneNumber}`
    // );
  }

  create(contact) {
    axios.post("http://localhost:8080/phonebook/v1/api/phonebook", contact);
  }

  edit(contact) {
    axios.put(
      `http://localhost:8080/phonebook/v1/api/phonebook/${contact.phoneNumber}`,
      contact
    );
  }

  emitEmitContact(contact) {
    this.editSource.next(contact);
  }

  emitContact(contact) {
    this.contactSource.next(contact);
  }

  newContact(contact) {
    this.editDestin.next(contact);
  }

  saveEdit(contact) {
    this.saveContact.next(contact);
  }
}
