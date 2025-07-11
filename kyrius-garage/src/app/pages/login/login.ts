import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

get email() {
  return this.loginForm.get('email');
}

get password() {
  return this.loginForm.get('password');
}

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;

      // Simulación de roles por email
      if (email.includes('admin')) {
        this.authService.loginAs('admin');
      } else {
        this.authService.loginAs('cliente');
      }

      this.router.navigate(['/home']);
    }
  }
}
