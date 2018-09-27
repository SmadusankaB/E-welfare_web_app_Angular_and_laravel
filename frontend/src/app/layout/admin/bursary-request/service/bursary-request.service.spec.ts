import { TestBed, inject } from '@angular/core/testing';

import { BursaryRequestService } from './bursary-request.service';

describe('BursaryRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BursaryRequestService]
    });
  });

  it('should be created', inject([BursaryRequestService], (service: BursaryRequestService) => {
    expect(service).toBeTruthy();
  }));
});
