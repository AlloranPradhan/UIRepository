import { TestBed } from '@angular/core/testing';

import { ServsplacesService } from './servsplaces.service';

describe('ServsplacesService', () => {
  let service: ServsplacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServsplacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
