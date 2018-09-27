import { TestBed, inject } from '@angular/core/testing';

import { AdvancedSearchFormService } from './advanced-search-form.service';

describe('AdvancedSearchFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvancedSearchFormService]
    });
  });

  it('should be created', inject([AdvancedSearchFormService], (service: AdvancedSearchFormService) => {
    expect(service).toBeTruthy();
  }));
});
