import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { DisplayContactComponent } from './components/display-contact/display-contact.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';

@NgModule({
  declarations: [AppComponent, ContactFormComponent, DisplayContactComponent, ContactsListComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
