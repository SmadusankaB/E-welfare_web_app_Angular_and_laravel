import { TestBed, async, inject } from '@angular/core/testing';

import { BursaryadminGuard } from './bursaryadmin.guard';

describe('BursaryadminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BursaryadminGuard]
    });
  });

  it('should ...', inject([BursaryadminGuard], (guard: BursaryadminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
