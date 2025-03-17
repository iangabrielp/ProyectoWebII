import { TestBed } from '@angular/core/testing';

import { ListaDeseadosService } from './lista-deseados.service';

describe('ListaDeseadosService', () => {
  let service: ListaDeseadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaDeseadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
