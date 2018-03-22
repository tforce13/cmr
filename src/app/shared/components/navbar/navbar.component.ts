import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cmr-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  constructor(
    public auth: AuthService,
    public router: Router
  ) {

  }

  onClickLogin() {
    this.router.navigate(['/login']);
  }

  onClickRegister() {
    this.router.navigate(['/register']);
  }

  onClickLogout() {
    this.auth.signOut();
    this.router.navigate(['/']);
  }

}
