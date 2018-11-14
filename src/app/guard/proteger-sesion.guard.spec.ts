import { TestBed, async, inject } from '@angular/core/testing';

import { ProtegerSesionGuard } from './proteger-sesion.guard';

describe('ProtegerSesionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProtegerSesionGuard]
    });
  });

  it('should ...', inject([ProtegerSesionGuard], (guard: ProtegerSesionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
