import { TestBed, inject } from '@angular/core/testing';

import { UserDashboardResolverService } from './user-dashboard-resolver.service';

describe('UserDashboardResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDashboardResolverService]
    });
  });

  it('should be created', inject([UserDashboardResolverService], (service: UserDashboardResolverService) => {
    expect(service).toBeTruthy();
  }));
});
