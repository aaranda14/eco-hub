// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <button (click)="login()">Login</button>
  `,
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login(): void {
    // Simulate user login
    const userId = 1; // Replace with the actual user ID or logic in a real app
    this.authService.login(userId);
  }
}
