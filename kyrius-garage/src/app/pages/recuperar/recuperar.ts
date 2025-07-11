import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-recuperar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recuperar.html',
  styleUrls: ['./recuperar.scss']
})
export class RecuperarComponent {
  recuperarForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.recuperarForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.recuperarForm.valid) {
      alert('Correo enviado para recuperación:\n' + this.recuperarForm.value.email);
    } else {
      this.recuperarForm.markAllAsTouched();
    }
  }

  get email() {
    return this.recuperarForm.get('email');
  }
}
