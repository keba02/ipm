import { TestBed } from '@angular/core/testing';

import { BonlettreService } from './bonlettre.service';

describe('BonlettreService', () => {
  let service: BonlettreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonlettreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
