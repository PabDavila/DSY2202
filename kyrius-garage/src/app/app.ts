import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';

/**
 * Componente raíz de la aplicación.
 * Maneja la autenticación y navegación general.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
})
export class App {
  /**
   * Constructor principal del componente.
   * @param auth Servicio de autenticación inyectado.
   * @param router Servicio de enrutamiento Angular.
   */
  constructor(public auth: AuthService, private router: Router) {}

  /**
   * Cierra la sesión del usuario y redirige al login.
   */
  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
