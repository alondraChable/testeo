import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { datosCargadosGuard } from './datos-cargados.guard';

describe('datosCargadosGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => datosCargadosGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
