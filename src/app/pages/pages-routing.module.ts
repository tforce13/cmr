import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { RatesComponent } from './rates/rates.component';
import { ApplicationComponent } from './application/application.component';

const routes: Routes = [
  {
  component: PagesComponent,
  children: [{
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'register',
    component: RegisterComponent,
  }, {
    path: 'profile',
    component: ProfileComponent,
  }, {
    path: 'rates',
    component: RatesComponent,    
  }, {
    path: 'application',
    component: ApplicationComponent,    
  }, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'    
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
