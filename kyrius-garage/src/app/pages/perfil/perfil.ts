import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.scss']
})
export class PerfilComponent {
  perfilForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
      nombre: ['Juan Pérez', Validators.required],
      email: ['juan@example.com', [Validators.required, Validators.email]],
      telefono: ['+56 9 1234 5678']
    });
  }

  onSubmit() {
    if (this.perfilForm.valid) {
      alert('Perfil actualizado:\n' + JSON.stringify(this.perfilForm.value, null, 2));
    } else {
      this.perfilForm.markAllAsTouched();
    }
  }

  get nombre() { return this.perfilForm.get('nombre'); }
  get email() { return this.perfilForm.get('email'); }
  get telefono() { return this.perfilForm.get('telefono'); }
}
