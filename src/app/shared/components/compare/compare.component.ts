import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from './../../../models/user';
import { Profile } from './../../../models/profile';
import { ApplicationService } from './../../../core/application.service';
import { ZipcodesService } from './../../../core/zipcodes.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})

export class CompareComponent implements OnInit {
 
  rates: Observable<any[]>;
  users: Observable<any[]>;
  profiles: Observable<any[]>;
  uid : string;
  product: string;
  state: string;
  zipcodeData;

  constructor(
    public router: Router,
    private afs: AngularFirestore,
    private applicationService: ApplicationService,
    private zipcodesService: ZipcodesService) { 
      this.users = afs.collection('users').valueChanges();
      this.profiles = afs.collection('profiles').valueChanges();
      this.rates = this.afs.collection('rates').valueChanges();
  }

  ngOnInit() {
    // let list: string;
    // let product: string;
    // let value: any;
    // this.rates.subscribe(data => {
    //   list = JSON.stringify(data);
    //   console.log('data', JSON.stringify(data));
    //   value = data;
    //   product = JSON.stringify(value[0]);
    // });
  }
  onClickGetRates () {
    this.getState('80439');
  }

  onClickApplyNow(uid:string, product:string) {
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
