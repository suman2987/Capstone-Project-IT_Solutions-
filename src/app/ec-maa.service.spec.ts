import { TestBed } from '@angular/core/testing';

import { EcMaaService } from './ec-maa.service';

describe('EcMaaService', () => {
  let service: EcMaaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcMaaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
