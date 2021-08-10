import { TestBed } from '@angular/core/testing';

import { CovitourismGuard } from './covitourism.guard';

describe('CovitourismGuardGuard', () => {
  let guard: CovitourismGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CovitourismGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
