import { TestBed, inject } from '@angular/core/testing';

import { LeftsideEditFormService } from './leftside-edit-form.service';

describe('LeftsideEditFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeftsideEditFormService]
    });
  });

  it('should be created', inject([LeftsideEditFormService], (service: LeftsideEditFormService) => {
    expect(service).toBeTruthy();
  }));
});
