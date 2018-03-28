import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from './../../../models/user';
import { Profile } from './../../../models/profile';
import { ApplicationService } from './../../../core/application.service';

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

  constructor(
    public router: Router,
    private afs: AngularFirestore,
    private applicationService: ApplicationService) { 
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
  onClickApplyNow(uid:string, product:string) {
    this.uid = uid;
    this.product = product;
    this.applicationService.setUid(this.uid);
    this.applicationService.setProduct (this.product);
    console.log ('uid: ', uid, ' product: ', product);
    this.router.navigate(['/application']);
  }
}
