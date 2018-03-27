import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from './../../../models/user';
import { Profile } from './../../../models/profile';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})

export class CompareComponent implements OnInit {
 
  list: string;
  product: string;
  value: any;
  rates: Observable<any[]>;
  users: Observable<any[]>;
  profiles: Observable<any[]>;

  constructor(private afs: AngularFirestore) { 
    this.users = afs.collection('users').valueChanges();
    this.profiles = afs.collection('profiles').valueChanges();
  }

  ngOnInit() {
    this.rates = this.afs.collection('rates').valueChanges();
    this.rates.subscribe(data => {
      this.list = JSON.stringify(data);
      console.log('data', JSON.stringify(data));
      this.value = data;
      this.product = JSON.stringify(this.value[0]);
   });
  }

}
