import { TestBed, async, inject } from '@angular/core/testing';

import { AlladminsGuard } from './alladmins.guard';

describe('AlladminsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlladminsGuard]
    });
  });

  it('should ...', inject([AlladminsGuard], (guard: AlladminsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
