import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoUsuarioComponent } from './carrito-usuario.component';

describe('CarritoUsuarioComponent', () => {
  let component: CarritoUsuarioComponent;
  let fixture: ComponentFixture<CarritoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarritoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
