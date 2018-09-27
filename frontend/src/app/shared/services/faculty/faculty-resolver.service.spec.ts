import { TestBed, inject } from '@angular/core/testing';

import { FacultyResolverService } from './faculty-resolver.service';

describe('FacultyResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacultyResolverService]
    });
  });

  it('should be created', inject([FacultyResolverService], (service: FacultyResolverService) => {
    expect(service).toBeTruthy();
  }));
});
