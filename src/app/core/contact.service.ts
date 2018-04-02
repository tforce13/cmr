import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { Contact } from '../models/contact';

@Injectable()
export class ContactService {
  contact: Observable<Contact | null>;
  constructor(private afs: AngularFirestore) { }

  setContact (contact: Contact) {
    const docId = this.afs.createId();
    this.afs.collection('contacts').doc(docId).set(contact)
  .then(function() {
      console.log('Document successfully written!');
  })
  .catch(function(error) {
      console.error('Error writing document: ', error);
  });
  }
}
