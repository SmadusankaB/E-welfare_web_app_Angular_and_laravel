import { TestBed, inject } from '@angular/core/testing';

import { AddFacultyService } from './add-faculty.service';

describe('AddFacultyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddFacultyService]
    });
  });

  it('should be created', inject([AddFacultyService], (service: AddFacultyService) => {
    expect(service).toBeTruthy();
  }));
});
