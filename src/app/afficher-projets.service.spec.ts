import { TestBed } from '@angular/core/testing';

import { AfficherProjetsService } from './afficher-projets.service';

describe('AfficherProjetsService', () => {
  let service: AfficherProjetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfficherProjetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
