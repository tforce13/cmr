import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray,
  Validators
} from "@angular/forms";
import { AngularFirestore } from "angularfire2/firestore";
import { AngularFireAuth } from "angularfire2/auth";
import { first, tap } from 'rxjs/operators';

@Component({
  selector: "rates",
  templateUrl: "./rates.component.html",
  styleUrls: ["./rates.component.scss"]
})
export class RatesComponent implements OnInit {
  rateForm: FormGroup;

  defaults = [
    'ThirtyYearFixedConforming',
    'ThirtyYearFixedJumbo',
    'FifteenYearFixedConforming',
    'FifteenYearFixedJumbo',
    'FiveToOneYearARMConforming',
    'FiveToOneYearARMJumbo'
  ];

  path: string;

  constructor(
    private fb: FormBuilder, 
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {

    this.afAuth.authState.pipe(
      first(),
      tap(user => {
        if (user) {
          const docId = this.afs.createId();
          const userId = user.uid;

          this.path = `rates/${userId}_${docId}`;

          this.rateForm.patchValue( { userId } )

        } else {
          alert('not logged in')
        }
      })
    )
    .subscribe()

    const fields: any = {};

    for (const p of this.defaults) {
      fields[p] = this.buildProduct();
    }

    fields['userId'] = ['']
    fields['createdAt'] = [new Date().getTime()]
    this.rateForm = this.fb.group(fields)

  }

  buildProduct() {
    return this.fb.group({
      rate: [null, Validators.required],
      points: [null, Validators.required],
      apr: [null, Validators.required],
      closing: [null, Validators.required],
      enabled: [true, Validators.required],
    });
  }

}