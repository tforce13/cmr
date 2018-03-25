import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../core/auth.service';
import { ProfileService } from './../../core/profile.service';
import { ReactiveFormsModule,  FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { AngularFirestore } from "angularfire2/firestore";
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { take, tap, map, switchMap } from 'rxjs/operators';
import { User } from './../../models/user';
import { Profile } from './../../models/profile';
import { EnabledState } from './../../models/enabledstate';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  submitted: boolean = false;
  uploadProgress: Observable<number>;
  uploadURL: Observable<string>;
  uploadState: Observable<string>;
  task: AngularFireUploadTask;
  photoURL: string;
  
    constructor(
    public router: Router,
    private afs: AngularFirestore,
    private afStorage: AngularFireStorage,
    public fb: FormBuilder,
    public authService: AuthService,
    public profileService: ProfileService,
    private afAuth: AngularFireAuth) { }

  // ngOnInit() {
  //  let p: Profile;
  //   this.afAuth.authState.pipe(
  //     tap(user => {
  //       if (user) {
  //         const profiles = this.afs.collection('profiles').doc(user.uid).valueChanges();
  //         profiles.subscribe ( userProfile => {
  //           const profile: Profile = userProfile as Profile;
  //           if (profile) {
  //             p = profile;
  //           }
  //           else {
  //             p.firstName = '';
  //             p.lastName = '';
  //             p.address1 = '';
  //             p.address2 = '';
  //             p.city = '';
  //             p.state = '';
  //             p.company = '';
  //             p.website = '';
  //             p.nmls = '';
  //             p.enabledState.al = false;
  //           }
  //         });           
  //       } else {
  //         alert('not logged in')
  //       }
  //     })
  //   )
  //   .subscribe();   

  //   p.firstName = 'William';
  //   p.lastName = 'Best';
  //   p.address1 = '11125 Dartmoor CT';
  //   p.address2 = 'Attn: Bill Best';
  //   p.city = '';
  //   p.state = '';
  //   p.company = '';
  //   p.website = '';
  //   p.nmls = '';
  //   p.enabledState.al = false;

  //   this.profileForm = this.fb.group({
  //     'firstName': [p.firstName,       [ Validators.required ] ],
  //     'lastName':  [p.lastName,        [ Validators.required ] ],
  //     'address1':  [p.address1,        [ Validators.required ] ],
  //     'address2':  [p.address2,        [ Validators.required ] ],
  //     'city':      [p.city,            [ Validators.required ] ],
  //     'state':     [p.state,           [ Validators.required ] ],
  //     'zip':       [p.zip,             [ Validators.required ] ],
  //     'company':   [p.company,         [ Validators.required ] ],
  //     'website':   [p.website,         [ Validators.required ] ],
  //     'nmls':      [p.nmls,            [ Validators.required ] ],
  //     'al' :       [p.enabledState.al, [ Validators.required ] ]
  //   });
  // }

  ngOnInit() {

    //this.profile.lastName = "William";
    // profile.lastName ="Best";
    // profile.address1 = "11125 Dartmoor Ct";
    // profile.address2 = "Attn: Bill Best";

    // this.profileForm = new FormGroup ({
    //   firstName: new FormControl({{this.profile.firstName}, Validators.required),
    //   lastName: new FormControl(this.profile.lastName, Validators.required),
    //   address1: new FormControl(this.profile.address1, Validators.required),
    //   address2: new FormControl(this.profile.address2, Validators.required),
    //   city: new FormControl(this.profile.city, Validators.required),
    //   state: new FormControl(this.profile.state, Validators.required),
    //   zip: new FormControl(this.profile.zip, Validators.required),
    //   company: new FormControl(this.profile.company, Validators.required),
    //   website: new FormControl(this.profile.website, Validators.required),
    //   nmls: new FormControl(this.profile.nmls, Validators.required),
    //   al: new FormControl(this.profile.enabledState.al, Validators.required)
    // })

    this.profileForm = this.fb.group({
      firstName: ['', [ Validators.required ] ],
      lastName:  ['', [ Validators.required ] ],
      address1:  ['', [ Validators.required ] ],
      address2:  ['', [ Validators.required ] ],
      city:      ['', [ Validators.required ] ],
      state:     ['', [ Validators.required ] ],
      zip:       ['', [ Validators.required ] ],
      company:   ['', [ Validators.required ] ],
      website:   ['', [ Validators.required ] ],
      nmls:      ['', [ Validators.required ] ],
      al :       [false, [ Validators.required ] ]
    });

    this.afAuth.authState.pipe(
      tap(user => {
        if (user) {
          const profiles = this.afs.collection('profiles').doc(user.uid).valueChanges();
          profiles.subscribe ( userProfile => {
            const profile: Profile = userProfile as Profile;
            if (profile) {
              this.profileForm.setValue({
                firstName: profile.firstName,
                lastName: profile.lastName,
                address1:  profile.address1,
                address2:  profile.address2,
                city: profile.city,
                state: profile.state,
                zip: profile.zip,
                company: profile.company,
                website: profile.website,
                nmls: profile.nmls,
                al: profile.enabledState.al  
              });              
            }
          });           
        } else {
          alert('not logged in')
        }
      })
    )
    .subscribe();

   }

  get firstName() { return this.profileForm.get('firstName'); }
  get lastName()  { return this.profileForm.get('lastName'); }
  get address1()  { return this.profileForm.get('address1'); }
  get address2()  { return this.profileForm.get('address2'); }
  get city()      { return this.profileForm.get('city'); }
  get state()     { return this.profileForm.get('state'); }
  get zip()       { return this.profileForm.get('zip'); }
  get company()   { return this.profileForm.get('company'); }
  get website()   { return this.profileForm.get('website'); }
  get nmls()      { return this.profileForm.get('nmls'); }
  get al()        { return this.profileForm.get('al'); }


  setProfile(usr) {
    this.submitted = true;
    this.uploadURL.subscribe(str => this.photoURL = str);

    const enabledState: EnabledState = {
      al: this.al.value
    };

    const user: User = {
      uid:  usr.uid,
      email: usr.email,
      photoURL: this.photoURL,
      displayName: usr.displayName,
      profileComplete: true      
    }

    const profile: Profile = {
      uid:          usr.uid,
      firstName:    this.firstName.value,
      lastName:     this.lastName.value,
      address1:     this.address1.value,
      address2:     this.address2.value,
      city:         this.city.value,
      state:        this.state.value,
      zip:          this.zip.value,
      company:      this.company.value,
      website:      this.website.value,
      nmls:         this.nmls.value,
      enabledState: enabledState      
    };

    this.authService.updateUserData(user);
    this.profileService.setProfile(profile);
  }  

  upload(event) {
    const randomId = Math.random().toString(36).substring(2);
    const ref = this.afStorage.ref(randomId);
    this.task = ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.uploadURL = this.task.downloadURL();
  }

  onContinue(event) {
    this.router.navigate(['']);
  }

}
