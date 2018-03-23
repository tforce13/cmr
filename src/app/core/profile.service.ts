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

  
  setProfileData(user: User) {

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`profiles/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'nameless user',
      photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ',
    };
    return userRef.set(data);
  }

  updateProfile(user: User, profile: Profile) {
    return this.afs.doc(`profiles/${user.uid}`).update(profile);
  }    
}
