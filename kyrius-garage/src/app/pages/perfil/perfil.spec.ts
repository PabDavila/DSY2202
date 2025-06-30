import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('el formulario debería ser inválido al inicio', () => {
    expect(component.perfilForm.valid).toBeFalsy();
  });

  it('el campo nombre debería ser obligatorio', () => {
    component.perfilForm.controls['nombre'].setValue('');
    expect(component.perfilForm.controls['nombre'].valid).toBeFalsy();
  });

  it('el formulario debería ser válido con datos correctos', () => {
    component.perfilForm.setValue({
      nombre: 'Juan Pérez',
      email: 'juan@mail.com',
      telefono: '123456789'
    });
    expect(component.perfilForm.valid).toBeTruthy();
  });
});
