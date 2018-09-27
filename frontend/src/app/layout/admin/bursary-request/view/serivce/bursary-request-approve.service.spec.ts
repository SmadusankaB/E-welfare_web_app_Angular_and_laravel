import { TestBed, inject } from '@angular/core/testing';

import { BursaryRequestApproveService } from './bursary-request-approve.service';

describe('BursaryRequestApproveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BursaryRequestApproveService]
    });
  });

  it('should be created', inject([BursaryRequestApproveService], (service: BursaryRequestApproveService) => {
    expect(service).toBeTruthy();
  }));
});
