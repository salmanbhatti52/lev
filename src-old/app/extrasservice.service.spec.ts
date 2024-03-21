import { TestBed } from '@angular/core/testing';

import { ExtrasserviceService } from './extrasservice.service';

describe('ExtrasserviceService', () => {
  let service: ExtrasserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtrasserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
