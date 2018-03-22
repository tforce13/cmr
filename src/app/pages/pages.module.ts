import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from './../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { RatesComponent } from './rates/rates.component';
import { FireFormDirective } from './fire-form.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PagesRoutingModule,
    SharedModule,
  ],
  declarations: [
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    RatesComponent,
    FireFormDirective    
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }