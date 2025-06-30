import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RecuperarComponent } from './recuperar';

describe('RecuperarComponent', () => {
  let component: RecuperarComponent;
  let fixture: ComponentFixture<RecuperarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecuperarComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('el formulario debe ser inválido si el email está vacío', () => {
    component.recuperarForm.controls['email'].setValue('');
    expect(component.recuperarForm.valid).toBeFalsy();
  });

  it('el email debe tener formato válido', () => {
    component.recuperarForm.controls['email'].setValue('invalido@');
    expect(component.recuperarForm.controls['email'].valid).toBeFalsy();
  });

  it('formulario válido si el email es correcto', () => {
    component.recuperarForm.controls['email'].setValue('usuario@mail.com');
    expect(component.recuperarForm.valid).toBeTruthy();
  });
});
