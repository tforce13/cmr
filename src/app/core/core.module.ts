import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { NotifyService } from './notify.service';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ValidationService } from './validation.service';
import { ProfileService } from './profile.service';
import { ApplicationService } from './application.service';
import { ContactService } from './contact.service';
import { ZipcodesService } from './zipcodes.service';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [AuthService, NotifyService, ValidationService, ProfileService, ApplicationService, ContactService, ZipcodesService],
})
export class CoreModule { }