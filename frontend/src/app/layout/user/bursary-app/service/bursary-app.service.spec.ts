import { TestBed, inject } from '@angular/core/testing';

import { BursaryAppService } from './bursary-app.service';

describe('BursaryAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BursaryAppService]
    });
  });

  it('should be created', inject([BursaryAppService], (service: BursaryAppService) => {
    expect(service).toBeTruthy();
  }));
});
