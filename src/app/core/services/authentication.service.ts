import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isAuthenticated = false;

  constructor() {}

  login(): void {}

  logout(): void {}
}
