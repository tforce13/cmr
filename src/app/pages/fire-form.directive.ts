import { Directive, Input, Output, EventEmitter, HostListener, AfterViewInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { take, tap, map, switchMap } from 'rxjs/operators';

@Directive({
  selector: '[fireForm]'
})
export class FireFormDirective implements AfterViewInit {

  @Input() path: string;
  @Input() formGroup: FormGroup;

  @Output() formState: 'saved';

  private _docRef: AngularFirestoreDocument<any>;
  private _collectionRef: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {

  }

  ngAfterViewInit() {
    const userId = this.formGroup.get('userId').value;

    this._docRef = this.afs.doc(this.path);
    this._collectionRef = this.afs.collection('rates', ref =>
      ref.where('userId', '==', userId).orderBy('createdAt', 'desc').limit(1)
    );

    this.populateForm();
  }

  // Listens to form submission
  @HostListener('ngSubmit', ['$event']) onSubmit(e) {
    this.setDoc();
  }

  // Populates data from Firestore
  private populateForm(): void {

    this._collectionRef.valueChanges().pipe(
      take(1),
      tap(docs => {
        const latest = docs[0]
        console.log(latest)
        if (latest) {
          delete latest.createdAt
          this.formGroup.patchValue(latest);
          this.formGroup.markAsPristine();
        }
      })
    )
    .subscribe()
  }

  // Updates form non-destructively
  async setDoc() {
    await this._docRef.set(this.formGroup.value, { merge: true })
    this.formGroup.markAsPristine();
  }

}