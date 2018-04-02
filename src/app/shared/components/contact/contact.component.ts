import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";

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

  constructor(private afs: AngularFirestore
              ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log ('onSubmit');
    alert (this.name);
    this.submitted = true;
  }
}
