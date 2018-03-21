# cmr
Compare Mortgage Rates

# Install AngularFire and Firebase

    npm install angularfire2 firebase --save

# Add Firebase Credentials

Modify the files environment.ts and environment.prod.ts, production: true, for prod, false for dev

    export const environment = {
      production: true,
      firebase: {
        apiKey: "AIzaSyDIq4Ug7sjBNqJAJTHkDhR0QBUAUY03qZA",
        authDomain: "comparemortgagerates-f8e4e.firebaseapp.com",
        databaseURL: "https://comparemortgagerates-f8e4e.firebaseio.com",
        projectId: "comparemortgagerates-f8e4e",
        storageBucket: "comparemortgagerates-f8e4e.appspot.com",
        messagingSenderId: "849211956117"
      }
    };

Modify app.module.ts, import the AngularFireModule and add AngularFireModule.initializeApp(environment.firebase) to the @NgModule imports: []

    import { AngularFireModule } from 'angularfire2';
    
    AngularFireModule.initializeApp(environment.firebase),

Modify app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'pages/home',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: '**',
    redirectTo: 'pages/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

# Angular CLI Scaffolding

    ng new cmr --service-worker --routing --style scss --skip-install
    cd cmr
    npm install
    ng generate module core -m app
    ng generate service core/auth -m core
    ng generate service core/validation -m core
    ng generate service core/notify -m core
    ng generate guard core/auth -m core
    ng generate module pages -m app
    ng generate module pages/pages-routing -m pages/pages
    ng generate component pages -m pages/pages
    ng generate component pages/home -m pages
    ng generate component pages/login -m pages
    ng generate component pages/register -m pages
    ng generate component pages/profile -m pages
    ng generate component pages/rates -m pages
    ng generate module shared -m app
    ng generate component shared/components/header -m shared/components
    ng generate component shared/components/navbar -m shared/components
    ng generate component shared/components/action -m shared/components
    ng generate component shared/components/featured -m shared/components
    ng generate component shared/components/facts -m shared/components
    ng generate component shared/components/contact -m shared/components
    ng generate component shared/components/footer -m shared/components

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).