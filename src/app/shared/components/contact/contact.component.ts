import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Contact } from './../../../models/contact';
import { ContactService } from './../../../core/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  submitted: boolean = false;

  constructor(private contatctService: ContactService
              ) { }

  ngOnInit() {
  }

  onSubmit() {
    let contact: Contact = {
      name: 'William Best',
      email: 'wpbest@gmail.com',
      subject: 'Loan Officer',
      message: 'How do I sign up',
      createdAt: new Date().getTime().toString()
    };
    this.contatctService.setContact(contact);
    this.submitted = true;
  }
}
