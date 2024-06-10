import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { SESSION_KEY } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  loggedIn = false;

  constructor(private authService: AuthService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.loggedIn = !!this.cookieService.get(SESSION_KEY);
  }

  logout(): void {
    this.authService.logout()
      .subscribe({
        next: res => {
          this.cookieService.deleteAll();
          window.location.reload();
        },
        error: err => {
          console.log(err);
        }
      })

  }
}
