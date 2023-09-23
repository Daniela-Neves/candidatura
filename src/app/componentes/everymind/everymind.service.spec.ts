import { TestBed } from '@angular/core/testing';

import { EverymindService } from './everymind.service';

describe('EverymindService', () => {
  let service: EverymindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EverymindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
