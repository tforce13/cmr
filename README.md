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
