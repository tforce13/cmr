import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule,  FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { ApplicationService } from './../../core/application.service';
import { Application } from './../../models/application';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  uid: string; 
  product: string;
  rates: Observable<any[]>;
  users: Observable<any[]>;
  profiles: Observable<any[]>;  
  applicationForm: FormGroup;
  contacted: boolean;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    private afs: AngularFirestore,
    private applicationService: ApplicationService) {
      this.users = afs.collection('users').valueChanges();
      this.profiles = afs.collection('profiles').valueChanges();
      this.rates = this.afs.collection('rates').valueChanges();
     }

  ngOnInit() {
    this.contacted = false;
    this.uid = this.applicationService.getUid();
    this.product = this.applicationService.getProduct();

    console.log ("application");
    console.log ("uid: ", this.uid);
    console.log ("profile: ", this.product);

     this.applicationForm = this.fb.group({
       firstName: ['', [ Validators.required ] ],
       lastName:  ['', [ Validators.required ] ],
       address1:  ['', [ Validators.required ] ],
       address2:  ['', [ Validators.required ] ],
       city:      ['', [ Validators.required ] ],
       state:     ['', [ Validators.required ] ],
       zip:       ['', [ Validators.required ] ],
       email:     ['', [ Validators.required ] ],
       phone:     ['', [ Validators.required ] ],
       message:   ['', [ Validators.required ] ]
     });    

  }

   get firstName() { return this.applicationForm.get('firstName'); }
   get lastName()  { return this.applicationForm.get('lastName'); }
   get address1()  { return this.applicationForm.get('address1'); }
   get address2()  { return this.applicationForm.get('address2'); }
   get city()      { return this.applicationForm.get('city'); }
   get state()     { return this.applicationForm.get('state'); }
   get zip()       { return this.applicationForm.get('zip'); }
   get email()     { return this.applicationForm.get('email'); }
   get phone()     { return this.applicationForm.get('phone'); }
   get message()   { return this.applicationForm.get('message'); }

  setContact(uid) {
    console.log ('onContact');
    let application: Application = {
      uid:          this.uid,
      firstName:    this.firstName.value,
      lastName:     this.lastName.value,
      address1:     this.address1.value,
      address2:     this.address2.value,
      city:         this.city.value,
      state:        this.state.value,
      zip:          this.zip.value,
      email:        this.email.value,
      phone:        this.phone.value,
      product:      this.product,
      message:      this.message.value
    };
    this.applicationService.setApplicationData(application);
    this.contacted = true;
  }
  onContinue() {
    console.log ('onContinue');
    this.router.navigate(['']);
  }

}
