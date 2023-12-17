// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUserId: number | null = null;

  login(userId: number): void {
    this.loggedInUserId = userId;
  }

  logout(): void {
    this.loggedInUserId = null;
  }

  getUserId(): number | null {
    return this.loggedInUserId;
  }

  isLoggedIn(): boolean {
    return this.loggedInUserId !== null;
  }
}
