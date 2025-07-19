import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroComponent } from './registro';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegistroComponent, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the registro component', () => {
    expect(component).toBeTruthy();
  });

  it('should mark password mismatch as invalid', () => {
    component.registroForm.setValue({
      nombre: 'Test',
      email: 'test@test.com',
      password: 'Test123',
      confirmarPassword: 'Different123'
    });
    expect(component.registroForm.errors?.['mismatch']).toBeTrue();
  });
});
