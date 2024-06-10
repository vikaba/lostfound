import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user : User = {
    name: '',
    email: '',
    pw: ''
  };
  submitted = false;

  constructor(private authService: AuthService) { }

  signup(): void  {
    const data = {
      name: this.user.name,
      email: this.user.email,
      pw: this.user.pw,
    };

    this.authService.register(data)
      .subscribe({
        next: (res) => {
          this.submitted = true;
        },
        error: (err) => console.error(err)
      });
  }
}
