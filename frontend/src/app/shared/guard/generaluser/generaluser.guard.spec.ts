import { TestBed, async, inject } from '@angular/core/testing';

import { GeneraluserGuard } from './generaluser.guard';

describe('GeneraluserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneraluserGuard]
    });
  });

  it('should ...', inject([GeneraluserGuard], (guard: GeneraluserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
