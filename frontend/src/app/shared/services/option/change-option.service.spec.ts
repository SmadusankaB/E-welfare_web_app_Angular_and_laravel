import { TestBed, inject } from '@angular/core/testing';

import { ChangeOptionService } from './change-option.service';

describe('ChangeOptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeOptionService]
    });
  });

  it('should be created', inject([ChangeOptionService], (service: ChangeOptionService) => {
    expect(service).toBeTruthy();
  }));
});
