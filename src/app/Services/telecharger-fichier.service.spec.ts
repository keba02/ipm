import { TestBed } from '@angular/core/testing';

import { TelechargerFichierService } from './telecharger-fichier.service';

describe('TelechargerFichierService', () => {
  let service: TelechargerFichierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelechargerFichierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
