import { TestBed } from '@angular/core/testing';

import { ProficienciaService } from './proficiencia.service';

describe('ProficienciaService', () => {
  let service: ProficienciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProficienciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
