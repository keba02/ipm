import { TestBed } from '@angular/core/testing';

import { StatutEmployeService } from './statut-employe.service';

describe('StatutEmployeService', () => {
  let service: StatutEmployeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatutEmployeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
