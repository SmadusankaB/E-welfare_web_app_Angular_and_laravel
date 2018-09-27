import { TestBed, async, inject } from '@angular/core/testing';

import { MahapolaadminGuard } from './mahapolaadmin.guard';

describe('MahapolaadminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MahapolaadminGuard]
    });
  });

  it('should ...', inject([MahapolaadminGuard], (guard: MahapolaadminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
