import { TestBed } from '@angular/core/testing';

import { PrecomptesService } from './precomptes.service';

describe('PrecomptesService', () => {
  let service: PrecomptesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrecomptesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
