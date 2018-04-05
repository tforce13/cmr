import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from './../../../models/user';
import { Profile } from './../../../models/profile';
import { Compare } from './../../../models/compare';
import { ApplicationService } from './../../../core/application.service';
import { ZipcodesService } from './../../../core/zipcodes.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})


export class CompareComponent implements OnInit {
  compareForm: FormGroup;
  rates: Observable<any[]>;
  users: Observable<any[]>;
  profiles: Observable<any[]>;
  uid: string;
  product: string;
  state: string;
  zipcodeData;

  constructor(
    public router: Router,
    private afs: AngularFirestore,
    private applicationService: ApplicationService,
    private zipcodesService: ZipcodesService,
    private fb: FormBuilder) {
      this.users = afs.collection('users').valueChanges();
      this.profiles = afs.collection('profiles').valueChanges();
      this.rates = this.afs.collection('rates').valueChanges();
  }

  ngOnInit() {
    this.compareForm = this.fb.group({
      ziporstate: new FormControl(''),
    });
  }

  get ziporstate() { return this.compareForm.get('ziporstate'); }

  consoleLogRates() {
    let list: string;
    let product: string;
    let value: any;
    this.rates.subscribe(data => {
      list = JSON.stringify(data);
      console.log('data', JSON.stringify(data));
      value = data;
      product = JSON.stringify(value[0]);
    });
  }

  isLicensed(profile: Profile, state: string): boolean {
    switch (state) {
      case 'ak': return profile.enabledState.ak;
      case 'al': return profile.enabledState.al;
      case 'az': return profile.enabledState.az;
      case 'ar': return profile.enabledState.ar;
      case 'ca': return profile.enabledState.ca;
      case 'co': return profile.enabledState.co;
      case 'ct': return profile.enabledState.ct;
      case 'de': return profile.enabledState.de;
      case 'fl': return profile.enabledState.fl;
      case 'ga': return profile.enabledState.ga;
      case 'hi': return profile.enabledState.hi;
      case 'id': return profile.enabledState.id;
      case 'il': return profile.enabledState.il;
      case 'in': return profile.enabledState.in;
      case 'ia': return profile.enabledState.ia;
      case 'ks': return profile.enabledState.ks;
      case 'ky': return profile.enabledState.ky;
      case 'la': return profile.enabledState.la;
      case 'me': return profile.enabledState.me;
      case 'md': return profile.enabledState.md;
      case 'ma': return profile.enabledState.ma;
      case 'mi': return profile.enabledState.mi;
      case 'mn': return profile.enabledState.mn;
      case 'ms': return profile.enabledState.ms;
      case 'mo': return profile.enabledState.mo;
      case 'mt': return profile.enabledState.mt;
      case 'ne': return profile.enabledState.ne;
      case 'nv': return profile.enabledState.nv;
      case 'nh': return profile.enabledState.nh;
      case 'nj': return profile.enabledState.nj;
      case 'nm': return profile.enabledState.nm;
      case 'ny': return profile.enabledState.ny;
      case 'nc': return profile.enabledState.nc;
      case 'nd': return profile.enabledState.nd;
      case 'oh': return profile.enabledState.oh;
      case 'ok': return profile.enabledState.ok;
      case 'or': return profile.enabledState.or;
      case 'pa': return profile.enabledState.pa;
      case 'ri': return profile.enabledState.ri;
      case 'sc': return profile.enabledState.sc;
      case 'sd': return profile.enabledState.sd;
      case 'tn': return profile.enabledState.tn;
      case 'tx': return profile.enabledState.tx;
      case 'ut': return profile.enabledState.ut;
      case 'vt': return profile.enabledState.vt;
      case 'va': return profile.enabledState.va;
      case 'wa': return profile.enabledState.wa;
      case 'wv': return profile.enabledState.wv;
      case 'wi': return profile.enabledState.wi;
      case 'wy': return profile.enabledState.wy;
    }
  }

  onClickGetRates (ziporstate: string) {
    console.log ('************  onSubmit ***************');
    alert(ziporstate);
    // this.getState('80439');
  }

  onClickApplyNow(uid: string, product: string) {
    this.uid = uid;
    this.product = product;
    this.applicationService.setUid(this.uid);
    this.applicationService.setProduct (this.product);
    console.log ('uid: ', uid, ' product: ', product);
    this.router.navigate(['/application']);
  }

  getState (zipCode: string) {
    this.zipcodesService.getState(zipCode).subscribe(
      // the first argument is a function which runs on success
      data => {
        this.zipcodeData = data;
        this.state = this.zipcodeData.results[0].address_components[2].short_name;
        console.log ('State: ' + this.state);
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done getting zipcode data')
    );
  }
}
