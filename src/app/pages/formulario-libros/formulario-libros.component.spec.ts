import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLibrosComponent } from './formulario-libros.component';

describe('FormularioLibrosComponent', () => {
  let component: FormularioLibrosComponent;
  let fixture: ComponentFixture<FormularioLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioLibrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
