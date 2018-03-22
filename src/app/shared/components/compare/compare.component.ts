import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { first, tap } from 'rxjs/operators';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})

export class CompareComponent implements OnInit {
  rates;
  list: string;
  product: string;
  value: any;

  constructor(private afs: AngularFirestore) { }

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
