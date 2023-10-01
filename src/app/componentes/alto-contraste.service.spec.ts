import { TestBed } from '@angular/core/testing';

import { AltoContrasteService } from './alto-contraste.service';

describe('AltoContrasteService', () => {
  let service: AltoContrasteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltoContrasteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
