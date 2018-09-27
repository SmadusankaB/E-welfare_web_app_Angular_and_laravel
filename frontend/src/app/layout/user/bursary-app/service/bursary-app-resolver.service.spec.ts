import { TestBed, inject } from '@angular/core/testing';

import { BursaryAppResolverService } from './bursary-app-resolver.service';

describe('BursaryAppResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BursaryAppResolverService]
    });
  });

  it('should be created', inject([BursaryAppResolverService], (service: BursaryAppResolverService) => {
    expect(service).toBeTruthy();
  }));
});
