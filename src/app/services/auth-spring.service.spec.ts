import { TestBed } from '@angular/core/testing';

import { AuthSpringService } from './auth-spring.service';

describe('AuthSpringService', () => {
  let service: AuthSpringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSpringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
