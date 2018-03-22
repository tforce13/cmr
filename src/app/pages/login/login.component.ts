import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../core/auth.service';
import { ValidationService } from './../../core/validation.service';

type UserFields = 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  formErrors: FormErrors = {
    'email': '',
    'password': ''
  };

  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Email must be a valid email',
    },
    'password': {
      'required': 'Password is required.',
      'pattern': 'Password must be include at one letter and one number.',
      'minlength': 'Password must be at least 4 characters long.',
      'maxlength': 'Password cannot be more than 40 characters long.',
    }
  };

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.buildForm();    
  }

  buildForm() {
    this.loginForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email,
      ]],
      'password': ['', [
        Validators.required,
        ValidationService.passwordValidator,
        Validators.minLength(6),
        Validators.maxLength(25),
      ]]
    });

    this.loginForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key) ) {
                this.formErrors[field] += `${(messages as {[key: string]: string})[key]} `;
              }
            }
          }
        }
      }
    }
  }  

  onClickEmailLogin() {
    console.log(' login email');
    this.auth.emailLogin(this.loginForm.value['email'], this.loginForm.value['password'])
    .then(() => this.afterLogin());
  }
  
  onClickGoogleLogin() {
    console.log(' login google');
    this.auth.googleLogin()
    .then(() => this.afterLogin());    
   }

   onClickFacebookLogin() {
    console.log(' login facebook');
    this.auth.facebookLogin()
    .then(() => this.afterLogin());    
   }

   onClickTwitterLogin() {
    console.log(' login twitter');
    this.auth.twitterLogin()
    .then(() => this.afterLogin());    
   }

   onClickGithubLogin() {
    console.log(' login github');
    this.auth.githubLogin()
    .then(() => this.afterLogin());    
  }

  onClickAnonymousLogin() {
    console.log(' login anonymous');
    this.auth.anonymousLogin()
    .then(() => this.afterLogin());
  }

  private afterLogin() {
    this.submitted = true;
    this.router.navigate(['']);
  }  
  
}
