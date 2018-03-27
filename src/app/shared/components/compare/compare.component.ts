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
 
  rates: Observable<any[]>;
  users: Observable<any[]>;
  profiles: Observable<any[]>;

  constructor(private afs: AngularFirestore) { 
    this.users = afs.collection('users').valueChanges();
    this.profiles = afs.collection('profiles').valueChanges();
  }

  ngOnInit() {
    let list: string;
    let product: string;
    let value: any;

    this.rates = this.afs.collection('rates').valueChanges();
    // this.rates.subscribe(data => {
    //   list = JSON.stringify(data);
    //   console.log('data', JSON.stringify(data));
    //   value = data;
    //   product = JSON.stringify(value[0]);
    // });
  }

}
