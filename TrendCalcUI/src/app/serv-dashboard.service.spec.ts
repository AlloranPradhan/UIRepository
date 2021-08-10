import { TestBed } from '@angular/core/testing';

import { ServDashboardService } from './serv-dashboard.service';

describe('ServDashboardService', () => {
  let service: ServDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
