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

  ngOnInit() {

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
      al:        [false, [ Validators.required ] ],
      ak:        [false, [ Validators.required ] ],
      az:        [false, [ Validators.required ] ],
      ar:        [false, [ Validators.required ] ],
      ca:        [false, [ Validators.required ] ],
      co:        [false, [ Validators.required ] ],
      ct:        [false, [ Validators.required ] ],
      de:        [false, [ Validators.required ] ],
      fl:        [false, [ Validators.required ] ],
      ga:        [false, [ Validators.required ] ],
      hi:        [false, [ Validators.required ] ],
      id:        [false, [ Validators.required ] ],
      il:        [false, [ Validators.required ] ],
      in:        [false, [ Validators.required ] ],
      ia:        [false, [ Validators.required ] ],
      ks:        [false, [ Validators.required ] ],
      ky:        [false, [ Validators.required ] ],
      la:        [false, [ Validators.required ] ],
      me:        [false, [ Validators.required ] ],
      md:        [false, [ Validators.required ] ],
      ma:        [false, [ Validators.required ] ],
      mi:        [false, [ Validators.required ] ],
      mn:        [false, [ Validators.required ] ],
      ms:        [false, [ Validators.required ] ],
      mo:        [false, [ Validators.required ] ],
      mt:        [false, [ Validators.required ] ],
      ne:        [false, [ Validators.required ] ],
      nv:        [false, [ Validators.required ] ],
      nh:        [false, [ Validators.required ] ],
      nj:        [false, [ Validators.required ] ],
      nm:        [false, [ Validators.required ] ],
      ny:        [false, [ Validators.required ] ],
      nc:        [false, [ Validators.required ] ],
      nd:        [false, [ Validators.required ] ],
      oh:        [false, [ Validators.required ] ],
      ok:        [false, [ Validators.required ] ],
      or:        [false, [ Validators.required ] ],
      pa:        [false, [ Validators.required ] ],
      ri:        [false, [ Validators.required ] ],
      sc:        [false, [ Validators.required ] ],
      sd:        [false, [ Validators.required ] ],
      tn:        [false, [ Validators.required ] ],
      tx:        [false, [ Validators.required ] ],
      ut:        [false, [ Validators.required ] ],
      vt:        [false, [ Validators.required ] ],
      va:        [false, [ Validators.required ] ],
      wa:        [false, [ Validators.required ] ],
      wv:        [false, [ Validators.required ] ],
      wi:        [false, [ Validators.required ] ],
      wy:        [false, [ Validators.required ] ]      
    });

    this.afAuth.authState.pipe(
      tap(user => {
        if (user) {
          this.photoURL = user.photoURL; 
          console.log ("photoURL: ", this.photoURL);
          const profiles = this.afs.collection('profiles').doc(user.uid).valueChanges();
          profiles.subscribe ( userProfile => {
            const profile: Profile = userProfile as Profile;
            if (profile) {
              this.profileForm.setValue({
                firstName: profile.firstName,
                lastName:  profile.lastName,
                address1:  profile.address1,
                address2:  profile.address2,
                city:      profile.city,
                state:     profile.state,
                zip:       profile.zip,
                company:   profile.company,
                website:   profile.website,
                nmls:      profile.nmls,
                al:        profile.enabledState.al,
                ak:        profile.enabledState.ak,
                az:        profile.enabledState.az,
                ar:        profile.enabledState.ar,
                ca:        profile.enabledState.ca,
                co:        profile.enabledState.co,
                ct:        profile.enabledState.ct,
                de:        profile.enabledState.de,
                fl:        profile.enabledState.fl,
                ga:        profile.enabledState.ga,
                hi:        profile.enabledState.hi,
                id:        profile.enabledState.id,
                il:        profile.enabledState.il,
                in:        profile.enabledState.in,
                ia:        profile.enabledState.ia,
                ks:        profile.enabledState.ks,
                ky:        profile.enabledState.ky,
                la:        profile.enabledState.la,
                me:        profile.enabledState.me,
                md:        profile.enabledState.md,
                ma:        profile.enabledState.ma,
                mi:        profile.enabledState.mi,
                mn:        profile.enabledState.nm,
                ms:        profile.enabledState.ms,
                mo:        profile.enabledState.mo,
                mt:        profile.enabledState.mt,
                ne:        profile.enabledState.ne,
                nv:        profile.enabledState.nv,
                nh:        profile.enabledState.nh,
                nj:        profile.enabledState.nj,
                nm:        profile.enabledState.nm,
                ny:        profile.enabledState.ny,
                nc:        profile.enabledState.nc,
                nd:        profile.enabledState.nd,
                oh:        profile.enabledState.oh,
                ok:        profile.enabledState.ok,
                or:        profile.enabledState.or,
                pa:        profile.enabledState.pa,
                ri:        profile.enabledState.ri,
                sc:        profile.enabledState.sc,
                sd:        profile.enabledState.sd,
                tn:        profile.enabledState.tn,
                tx:        profile.enabledState.tx,
                ut:        profile.enabledState.ut,
                vt:        profile.enabledState.vt,
                va:        profile.enabledState.va,
                wa:        profile.enabledState.wa,
                wv:        profile.enabledState.wv,
                wi:        profile.enabledState.wi,
                wy:        profile.enabledState.wy                  
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
  get ak()        { return this.profileForm.get('ak'); }
  get az()        { return this.profileForm.get('az'); }
  get ar()        { return this.profileForm.get('ar'); }
  get ca()        { return this.profileForm.get('ca'); }
  get co()        { return this.profileForm.get('co'); }
  get ct()        { return this.profileForm.get('ct'); }
  get de()        { return this.profileForm.get('de'); }
  get fl()        { return this.profileForm.get('fl'); }
  get ga()        { return this.profileForm.get('ga'); }
  get hi()        { return this.profileForm.get('hi'); }
  get id()        { return this.profileForm.get('id'); }
  get il()        { return this.profileForm.get('il'); }
  get in()        { return this.profileForm.get('in'); }
  get ia()        { return this.profileForm.get('ia'); }
  get ks()        { return this.profileForm.get('ks'); }
  get ky()        { return this.profileForm.get('ky'); }
  get la()        { return this.profileForm.get('la'); }
  get me()        { return this.profileForm.get('me'); }
  get md()        { return this.profileForm.get('md'); }
  get ma()        { return this.profileForm.get('ma'); }
  get mi()        { return this.profileForm.get('mi'); }
  get mn()        { return this.profileForm.get('mn'); }
  get ms()        { return this.profileForm.get('ms'); }
  get mo()        { return this.profileForm.get('mo'); }
  get mt()        { return this.profileForm.get('mt'); }
  get ne()        { return this.profileForm.get('ne'); }
  get nv()        { return this.profileForm.get('nv'); }
  get nh()        { return this.profileForm.get('nh'); }
  get nj()        { return this.profileForm.get('nj'); }
  get nm()        { return this.profileForm.get('nm'); }
  get ny()        { return this.profileForm.get('ny'); }
  get nc()        { return this.profileForm.get('nc'); }
  get nd()        { return this.profileForm.get('nd'); }
  get oh()        { return this.profileForm.get('oh'); }
  get ok()        { return this.profileForm.get('ok'); }
  get or()        { return this.profileForm.get('or'); }
  get pa()        { return this.profileForm.get('pa'); }
  get ri()        { return this.profileForm.get('ri'); }
  get sc()        { return this.profileForm.get('sc'); }
  get sd()        { return this.profileForm.get('sd'); }
  get tn()        { return this.profileForm.get('tn'); }
  get tx()        { return this.profileForm.get('tx'); }
  get ut()        { return this.profileForm.get('ut'); }
  get vt()        { return this.profileForm.get('vt'); }
  get va()        { return this.profileForm.get('va'); }
  get wa()        { return this.profileForm.get('wa'); }
  get wv()        { return this.profileForm.get('wv'); }
  get wi()        { return this.profileForm.get('wi'); }
  get wy()        { return this.profileForm.get('wy'); }

  setProfile(usr) {
    console.log ("setProfile");
    this.submitted = true;
    if (this.uploadURL) {
      this.uploadURL.subscribe(str => this.photoURL = str);
      console.log ("uploadURL.subscribe: ", this.photoURL);
    }
    let enabledState: EnabledState = {
      al: this.al.value,
      ak: this.al.value,
      az: this.az.value,
      ar: this.ar.value,
      ca: this.ca.value,
      co: this.co.value,
      ct: this.ct.value,
      de: this.de.value,
      fl: this.fl.value,
      ga: this.ga.value,
      hi: this.hi.value,
      id: this.id.value,
      il: this.il.value,
      in: this.in.value,
      ia: this.ia.value,
      ks: this.ks.value,
      ky: this.ky.value,
      la: this.la.value,
      me: this.me.value,
      md: this.md.value,
      ma: this.ma.value,
      mi: this.mi.value,
      mn: this.mn.value,
      ms: this.ms.value,
      mo: this.mo.value,
      mt: this.mt.value,
      ne: this.ne.value,
      nv: this.nv.value,
      nh: this.nh.value,
      nj: this.nj.value,
      nm: this.nm.value,
      ny: this.ny.value,
      nc: this.nc.value,
      nd: this.nd.value,
      oh: this.oh.value,
      ok: this.ok.value,
      or: this.or.value,
      pa: this.pa.value,
      ri: this.ri.value,
      sc: this.sc.value,
      sd: this.sd.value,
      tn: this.tn.value,
      tx: this.tx.value,
      ut: this.ut.value,
      vt: this.vt.value,
      va: this.va.value,
      wa: this.wa.value,
      wv: this.wv.value,
      wi: this.wi.value,
      wy: this.wy.value
    };
    console.log ("EnabledState: ", enabledState);
    let user: User = {
      uid:  usr.uid,
      email: usr.email,
      photoURL: this.photoURL,
      displayName: usr.displayName,
      profileComplete: true      
    }
    console.log ("User: ", user);
    let profile: Profile = {
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
    console.log ('Profile: ', profile);
    console.log ('User: ', user);
    this.authService.updateUserData(user);
    console.log ("updateUserData");
    this.profileService.setProfileData(profile);
    console.log ("setProfile");
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

  onCheckAllStates() {
    this.profileForm.setValue({
      firstName: this.firstName.value,
      lastName:  this.lastName.value,
      address1:  this.address1.value,
      address2:  this.address2.value,
      city:      this.city.value,
      state:     this.state.value,
      zip:       this.zip.value,
      company:   this.company.value,
      website:   this.website.value,
      nmls:      this.nmls.value,
      al: true,
      ak: true,
      az: true,
      ar: true,
      ca: true,
      co: true,
      ct: true,
      de: true,
      fl: true,
      ga: true,
      hi: true,
      id: true,
      il: true,
      in: true,
      ia: true,
      ks: true,
      ky: true,
      la: true,
      me: true,
      md: true,
      ma: true,
      mi: true,
      mn: true,
      ms: true,
      mo: true,
      mt: true,
      ne: true,
      nv: true,
      nh: true,
      nj: true,
      nm: true,
      ny: true,
      nc: true,
      nd: true,
      oh: true,
      ok: true,
      or: true,
      pa: true,
      ri: true,
      sc: true,
      sd: true,
      tn: true,
      tx: true,
      ut: true,
      vt: true,
      va: true,
      wa: true,
      wv: true,
      wi: true,
      wy: true                  
    });             

  }

  onUncheckAllStates() {
    this.profileForm.setValue({
      firstName: this.firstName.value,
      lastName:  this.lastName.value,
      address1:  this.address1.value,
      address2:  this.address2.value,
      city:      this.city.value,
      state:     this.state.value,
      zip:       this.zip.value,
      company:   this.company.value,
      website:   this.website.value,
      nmls:      this.nmls.value,
      al: false,
      ak: false,
      az: false,
      ar: false,
      ca: false,
      co: false,
      ct: false,
      de: false,
      fl: false,
      ga: false,
      hi: false,
      id: false,
      il: false,
      in: false,
      ia: false,
      ks: false,
      ky: false,
      la: false,
      me: false,
      md: false,
      ma: false,
      mi: false,
      mn: false,
      ms: false,
      mo: false,
      mt: false,
      ne: false,
      nv: false,
      nh: false,
      nj: false,
      nm: false,
      ny: false,
      nc: false,
      nd: false,
      oh: false,
      ok: false,
      or: false,
      pa: false,
      ri: false,
      sc: false,
      sd: false,
      tn: false,
      tx: false,
      ut: false,
      vt: false,
      va: false,
      wa: false,
      wv: false,
      wi: false,
      wy: false                  
    });         
  }
}
