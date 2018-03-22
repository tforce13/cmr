import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cmr-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public email: string;
  public photoURL: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {

  }

  ngOnInit() {
    this.isLogin = false;
    this.email = '';
    this.photoURL = 'https://goo.gl/Fz9nrQ';    
}
onClickLogin() {
  this.router.navigate(['/login']);
}
onClickRegister() {
  this.router.navigate(['/register']);
}

onClickLogout() {
  this.authService.signOut();
  this.router.navigate(['']);
}

onClickProfile() {
  this.router.navigate(['/profile']);
}


}
