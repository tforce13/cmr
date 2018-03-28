import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationService {
  uid: string;
  product: string;

  constructor() {
    this.uid = '';
    this.product = '';
   }

   getUid () {
     return this.uid;
   }

   getProduct() {
     return this.product;
   }

   setUid (uid: string) {
     this.uid = uid;
   }

   setProduct (product: string) {
     this.product = product;
   }
}
