import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../models/profile';

@Injectable()
export class ProfileService {
  profilesCollection: AngularFirestoreCollection<Profile>;
  profiles: Observable<Profile[]>;
  profileDoc: AngularFirestoreDocument<Profile>;

  constructor(public afs: AngularFirestore) { 
    this.profilesCollection = this.afs.collection('profiles', ref => ref.orderBy('uid'));

    this.profiles = this.profilesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Profile;
        data.uid = a.payload.doc.id;
        return data;
      });
    });
  }

  getProfiles(){
    return this.profiles;
  }

  addProfile(profile: Profile){
    this.profilesCollection.add(profile);
  }

  deleteProfile(profile: Profile){
    this.profileDoc = this.afs.doc(`profiles/${profile.uid}`);
    this.profileDoc.delete();
  }

  updateProfile(profile: Profile){
    this.profileDoc = this.afs.doc(`profiles/${profile.uid}`);
    this.profileDoc.update(profile);
  }

}
