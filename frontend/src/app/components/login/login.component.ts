import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { SESSION_KEY } from '../../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = "";
  password = "";

  constructor(
    private cookieService: CookieService,
    private authService: AuthService
  ) {}

  login() {
    this.authService.login({email: this.username, pw: this.password})
      .subscribe({
        next: (data) => {
          window.location.href = "/items";
        },
        error: (err) => console.error(err)
      })
  }

}
