# cmr
Compare Mortgage Rates

# Documentation

Node.js <https://nodejs.org/en/docs/>  
Angular <https://angular.io/>  
Angular CLI <https://cli.angular.io/>  
Material Design for Bootstrap 4 <https://mdbootstrap.com/>  
Firebase <https://firebase.google.com/docs/>  
Firebase CLI <https://firebase.google.com/docs/cli/>  
AnguarFire2 <https://github.com/angular/angularfire2>  
AngularFirebase <https://angularfirebase.com/>  
RxJS <http://reactivex.io/rxjs/>  
capacitor <https://blog.ionicframework.com/announcing-capacitor-1-0-0-alpha/>  

# git

## Clear git credentials

### Windows

    git credential-manager uninstall

### macOS

    git credential-osxkeychain erase
    host=github.com
    protocol=https
    <press return>

#### Configuration

Configure the git helper tool for osx-keychain to store your login credentials associated with the entire path of the repository rather than just the domain which is the default.

    git config --global --edit

    [credential]
      helper = osxkeychain
      useHttpPath = true

## Set user name

     git config --global user.name "sbbnet"

## Set email address

     git config --global user.email "bbest@loanbright.com"

## .gitignore
    # misc
    package-lock.json

# Install Node

## Prerequisites

### Windows

    Chocolatey is a package manager for Windows (like apt-get or yum but for Windows). It was designed to be a decentralized framework for quickly installing applications and tools that you need. Install with PowerShell.exe: Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

#### Install via Chocolatey

    choco upgrade chocolatey
    choco install nodejs.install

#### Update via Chocolatey

    choco upgrade chocolatey
    choco upgrade nodejs.install

### macOS

    XCode: Apple’s development software is used to build Mac and iOS apps It is free and you can find it in the Apple App Store.
    Homebrew : Homebrew is a package manager for the Mac. Open Terminal and type: ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

#### Install via HomeBrew

Make sure Homebrew has the latest version of the Node package. In Terminal type:

    brew update
    brew install node

#### Update via HomeBrew

    brew update
    brew upgrade node

## Dislay Node Version

    node -v
    v9.10.1

    npm -v
    5.7.1

# Install global packages Angular, TypeScript, Firebase

    npm install -g @angular/cli  
    npm install -g typescript  
    npm install -g firebase-tool  

# Display Angular CLI Version and Dependancies

    ng version

# Typescript Version

    tsc -v
    Version 2.7.2

# Firebase CLI Version

    firebase -V
    3.17.4    

# Visual Studio Code

Start Visual Studio Code in command line

    code .

    use Ctrl + ] to indent

    use Ctrl + K, Ctrl + F to format selected cod

## Integrated Terminal

    use Ctrl + ' to open integrated terminal

# Pod Casts

## AngularAir

### website: <https://angularair.com/>

### YouTube: <https://www.youtube.com/c/AngularAirPodcast>

# YouTube

## Demos With Angular <https://www.youtube.com/channel/UCYFd7Qy93YP7gPERnxP545A>

# Sample GitHub Repositories

FireStore Fetch Items App <https://github.com/Belchenkov/angular5-FireStore>  
Angular + Firebase Progressive Web App Starter <https://github.com/codediodeio/angular-firestarter>  

# Developers to Follow

Jeff Delaney GitHub: <https://github.com/codediodeio>  
AngularFirebase GitHub: <https://github.com/AngularFirebase>  
Stephen Fluin GitHub: <https://github.com/StephenFluin>  
David East GitHub: <https://github.com/davideast>

# Jeff Delaney (AngularFirebase)

### Title: Consultant, Google Developer Expetrts (Firebase GDE)

### email: hello@jeffdelaney.me

### gmail: delaneyphx@gmail.com

### twitter: @Jeffdelaney23

### github: codediodeio

# Example Angular 5 PWA (Progressive Web App) Apps

Hacker News PWA with an Angular 5 Service Worker: <https://github.com/codediodeio/hnpwa-angular5>  
Angular Progressive Web App using Workbox 2.0 or NGSW 5: <https://github.com/webmaxru/pwatter>  
Angular Firebase Progressive Web App Starter <https://github.com/codediodeio/angular-firestarter>

# Progressive Web Applications

Stephen Fluin's ngsw-config.json
<https://github.com/StephenFluin/fluin.io/blob/master/src/ngsw-config.json>

Minko Gechev's ngsw-config.json
<https://github.com/mgechev/angular-seed/blob/master/src/client/ngsw-config.json>

Maxim Salnikov's ngsw-config.json
<https://github.com/webmaxru/ngPwa/blob/master/src/ngsw-config.json>

Austin McDaniel's ngsw-config.json
<https://github.com/amcdnl/material.angular.io/blob/master/src/ngsw-config.json>

# Image Optimization

<https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization>

# http-server

The live-server project’s website can be found at <https://github.com/indexzero/http-server>. To install http-server globally on your system just use the following command:

    npm install http-server -g

Now you can start http-server right inside the dist folder:

    cd dist
    http-server -c-1

This spins up a Node.js httpd which serves the files in your directory as static files accessible from: <http://localhost:8080>

# Install AngularFire and Firebase

    npm install angularfire2 firebase --save

# Firebase Authentication

## Facebook

    App ID: 1887679091274433
    App Secret: 9ecc7527854d15d2584a65a8c0515121

## Twitter

    App ID: n03VXxOl27PHsobwaQHvtVHNQ
    App Secret: cDcrhJgCFSyw0QlpwBglSaRgCaVAptgKvqoS95irsogkvMcvZR

## GitHub

    Client ID: 27f3baa51926bfcf5eb1
    Client Secret: 9dc54caaadcc5df78a03c037dc52c25c776cd844

# Geocoding API key

     AIzaSyBtpQ6TfOFo3FP-DoZib_iKoaN1ddOThn4

# SendGrid API Key

    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


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

# Angular Material Design for Bootstrap

Version 5.2.3

## Setup the Build Environment Files

Create three environments dev, test, and prod by creating the files:

Rename the exsisting file environment.ts to environment.dev.ts,

environment.dev.ts  
environment.prod.ts  
environment.test.ts

in the ./src/environments folder

Add your credentials to each of the envirnments.

    export const environment = {
      production: false,
      firebaseConfig: {
        apiKey: '<your-key>',
        authDomain: '<your-project-authdomain>',
        databaseURL: '<your-database-URL>',
        projectId: '<your-project-id>',
        storageBucket: '<your-storage-bucket>',
        messagingSenderId: '<your-messaging-sender-id>'
      }
    };

In the file ./src/app/app.module.ts, add the AngularFire2 to the app.

    import { AngularFireModule } from 'angularfire2';
    import { AngularFireDatabaseModule } from 'angularfire2/database';
    import { AngularFireAuthModule } from 'angularfire2/auth';
    import { AngularFirestoreModule } from 'angularfire2/firestore';

    import { environment } from '../environments/environment.dev';
    export const firebaseConfig = environment.firebaseConfig;

    // ...omitted

    @NgModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFirestoreModule
      ],

    // ...omitted

    })

## Map the Build Environment Files

The mapping used to determine which environment file is used can be found in .angular-cli.json:

In the section

    "apps": 
      "environmentSource": "environments/environment.dev.ts" "environments": {
        "dev": "environments/environment.dev.ts",
        "test": "environments/environment.test.ts",
        "prod": "environments/environment.prod.ts"
      },

## Build Targets and Environments

    ng build --target=development --environment=dev  
    ng build --dev --env=dev  
    ng build --dev
    ng build

    ng build --target=production --environment=test  
    ng build --prod --env=test  

    ng build --target=production --environment=prod  
    ng build --prod --env=prod  
    ng build --prod

You can also add your own env files other than dev and prod by doing the following:  
Create a src/environments/environment.NAME.ts  
add { "NAME": 'src/environments/environment.NAME.ts' } to the apps[0].environments object in .angular-cli.json
use them via the --env=NAME flag on the build/serve commands.

--dev vs --prod builds  
Both --dev/--target=development and --prod/--target=production are 'meta' flags, that set other flags. If you do not specify either you will get the --dev defaults.

Flag               --dev  --prod  
--aot              false  true  
--environment      dev    prod  
--output-hashing   media  all  
--sourcemaps       true   false  
--extract-css      false  true  
--named-chunks     true   false  
--build-optimizer  false  true with AOT and Angular 5  

--prod also sets the following non-flaggable settings:

Adds service worker if configured in .angular-cli.json.  
Replaces process.env.NODE_ENV in modules with the production value (this is needed for some libraries, like react).  
Runs UglifyJS on the code.

## Deployment to Firebase Hosting

    firebase login

    firebase init

Choose hosting.  
Select a default Firebase project for this directory.   
Change public folder to dist when asked (it defaults to public).  
Configure as single page app? Yes.  
Overwrite your index.html file? No.

## Build for Production

    ng build --prod

## Deploy

firebase use --add Select Development alias dev  
firebase use --add Select Test alias test  
firebase use --add Select Production alias prod  

firebase deploy -P dev  
firebase deploy -P test   
firebase deploy -P prod  

## Debugging Environments in Visual Studio Code

    ng serve -e dev
    ng serve -e test
    ng serve -e prod

## Hosting

### Development

url: <https://CompareMortgageRates.com>

### Test

url: <not yet setup>

### Production

url: <not yet setup>


## GitHub Account

username: sbbnet
email: bbest@loanbright.com


# iStock

customer number: 17618252  
name: Russell Straud  
company: SBBnet   


# Angular CLI Scaffolding

    ng new cmr --service-worker --routing --style scss --skip-install
    cd cmr
    npm install
    ng generate module core -m app
    ng generate service core/auth -m core
    ng generate service core/validation -m core
    ng generate service core/notify -m core
    ng generate service core/profile -m core
    ng generate service core/application -m core
    ng generate service core/contact -m core
    ng generate guard core/auth -m core
    ng generate module pages -m app
    ng generate module pages/pages-routing -m pages/pages
    ng generate component pages -m pages/pages
    ng generate component pages/home -m pages
    ng generate component pages/login -m pages
    ng generate component pages/register -m pages
    ng generate component pages/profile -m pages
    ng generate component pages/rates -m pages
    ng generate component pages/application -m pages
    ng generate module shared -m app
    ng generate component shared/components/header -m shared
    ng generate component shared/components/navbar -m shared
    ng generate component shared/components/action -m shared
    ng generate component shared/components/featured -m shared
    ng generate component shared/components/facts -m shared
    ng generate component shared/components/compare -m shared
    ng generate component shared/components/contact -m shared
    ng generate component shared/components/footer -m shared
    ng generate pipe shared/pipes/SelectUser -m shared
    ng generate pipe shared/pipes/SelectProfile -m shared
    ng generate pipe shared/pipes/SelectRate -m shared

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