import { TestBed } from '@angular/core/testing';

import { FormacaoAcademicaService } from './formacaoAcademica.service';

describe('FormacaoAcademicaService', () => {
  let service: FormacaoAcademicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormacaoAcademicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
