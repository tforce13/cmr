import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { NotifyService } from './notify.service';

import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { Profile } from '../models/profile';
import { User } from '../models/user';

@Injectable()
export class ProfileService {
  profile: Observable<Profile | null>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              private notify: NotifyService) {

    this.profile = this.afAuth.authState
      .switchMap((profile) => {
        if (profile) {
          return this.afs.doc<Profile>(`profiles/${profile.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      });
  }  

  setProfile ( profile: Profile) {
    const profileRef: AngularFirestoreDocument<Profile> = this.afs.doc(`profiles/${profile.uid}`);
    const db = firebase.firestore();
    const docRef = db.collection("profiles").doc(profile.uid);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            return this.afs.doc(`profiles/${profile.uid}`).update(profile);
        } else {
            console.log("No such document!");
            return profileRef.set(profile);
          }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });    
  }

}
