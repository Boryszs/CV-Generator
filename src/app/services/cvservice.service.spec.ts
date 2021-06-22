import { TestBed } from '@angular/core/testing';

import { CvserviceService } from './cvservice.service';

describe('CvserviceService', () => {
  let service: CvserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
