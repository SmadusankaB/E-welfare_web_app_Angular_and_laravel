import { TestBed, inject } from '@angular/core/testing';

import { MonthsResolverService } from './months-resolver.service';

describe('MonthsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonthsResolverService]
    });
  });

  it('should be created', inject([MonthsResolverService], (service: MonthsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
