import { TestBed } from '@angular/core/testing';

import { ProprietaireserviceService } from './proprietaireservice.service';

describe('ProprietaireserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProprietaireserviceService = TestBed.get(ProprietaireserviceService);
    expect(service).toBeTruthy();
  });
});
