import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { usuarioAuthGuard } from './usuario-auth.guard';

describe('usuarioAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => usuarioAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
