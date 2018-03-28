import { Injectable } from '@angular/core';
import { Application } from './../models/application';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class ApplicationService {
  uid: string;
  product: string;

  constructor(
    private afs: AngularFirestore
  ) {
    this.uid = '';
    this.product = '';
   }

   getUid () {
     return this.uid;
   }

   getProduct() {
     return this.product;
   }

   setUid (uid: string) {
     this.uid = uid;
   }

   setProduct (product: string) {
     this.product = product;
   }

   setApplicationData ( application: Application) {
    const profileRef: AngularFirestoreDocument<Application> = this.afs.doc(`applications/${application.uid}`);
      return profileRef.set(application);
   }
}
