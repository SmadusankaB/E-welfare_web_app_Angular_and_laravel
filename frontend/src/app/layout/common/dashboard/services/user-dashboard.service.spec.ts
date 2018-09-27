import { TestBed, inject } from '@angular/core/testing';

import { UserDashboardService } from './user-dashboard.service';

describe('UserDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDashboardService]
    });
  });

  it('should be created', inject([UserDashboardService], (service: UserDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
