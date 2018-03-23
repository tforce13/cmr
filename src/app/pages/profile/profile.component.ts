import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../core/auth.service';
import { ReactiveFormsModule,  FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { take, tap, map, switchMap } from 'rxjs/operators';

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
    private afStorage: AngularFireStorage,
    public fb: FormBuilder,
    public auth: AuthService) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      'firstName': ['',    [ Validators.required ] ],
      'lastName':  ['',    [ Validators.required ] ],
      'address1':  ['',    [ Validators.required ] ],
      'address2':  ['',    [ Validators.required ] ],
      'city':      ['',    [ Validators.required ] ],
      'state':     ['',    [ Validators.required ] ],
      'zip':       ['',    [ Validators.required ] ],
      'company':   ['',    [ Validators.required ] ],
      'website':   ['',    [ Validators.required ] ],
      'nmls':      ['',    [ Validators.required ] ],
      'al' :       [false, [ Validators.required ] ]
    });
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

  setProfile(user) {
    this.submitted = true;
    this.uploadURL.subscribe(str => this.photoURL = str);
    return this.auth.updateProfile(user,
      {
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
        photoURL:  this.photoURL,
        al:        this.al.value
      }
    );
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
