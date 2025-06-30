import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentRole: string = '';

  constructor() {}

  loginAs(role: 'admin' | 'cliente') {
    this.currentRole = role;
    localStorage.setItem('role', role);
  }

  logout() {
    this.currentRole = '';
    localStorage.removeItem('role');
  }

  getRole(): string {
    return this.currentRole || localStorage.getItem('role') || '';
  }

  isAdmin(): boolean {
    return this.getRole() === 'admin';
  }

  isCliente(): boolean {
    return this.getRole() === 'cliente';
  }

  isLoggedIn(): boolean {
    return !!this.getRole();
  }
}
