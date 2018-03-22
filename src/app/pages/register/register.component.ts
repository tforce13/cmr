import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../core/auth.service';
import { ValidationService } from './../../core/validation.service';

type UserFields = 'email' | 'password' | 'verifypassword';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  formErrors: FormErrors = {
    'email': '',
    'password': '',
    'verifypassword': '',
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
    },
    'verifypassword': {
      'required': 'Password is required.',
      'pattern': 'Password must be include at one letter and one number.',
      'minlength': 'Password must be at least 4 characters long.',
      'maxlength': 'Password cannot be more than 40 characters long.',
    },
  };

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.buildForm();    
  }

  buildForm() {
    this.registerForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]],
      'password': ['', [
        Validators.required,
        ValidationService.passwordValidator,
        Validators.minLength(6),
        Validators.maxLength(25)
      ]],
      'verifypassword': ['', [
        Validators.required,
        ValidationService.passwordValidator,
        Validators.minLength(6),
        Validators.maxLength(25)
      ]]
    });

    this.registerForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  onValueChanged(data?: any) {
    if (!this.registerForm) { return; }
    const form = this.registerForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password' || field === 'verifypassword')) {
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

  onClickEmailRegister() {
    console.log(' register google');
    this.auth.emailSignUp(this.registerForm.value['email'], this.registerForm.value['password'])
    .then(() => {
      
      this.afterRegister()
    });
  }

  onClickGoogleRegister() {
    console.log(' register google');
    this.auth.googleLogin()
    .then(() => this.afterRegister());    
   }

   onClickFacebookRegister() {
    console.log(' register facebook');
    this.auth.facebookLogin()
    .then(() => this.afterRegister());    
   }

   onClickTwitterRegister() {
    console.log(' register twitter');
    this.auth.twitterLogin()
    .then(() => this.afterRegister());    
   }

   onClickGithubRegister() {
    console.log(' register github');
    this.auth.githubLogin()
    .then(() => this.afterRegister());    
  }

  onClickAnonymousRegister() {
    console.log(' register anonymous');
    this.auth.anonymousLogin()
    .then(() => this.afterRegister());
  }
  
  private afterRegister() {
    this.submitted = true;
    this.router.navigate(['/profile']);
  }    
}
