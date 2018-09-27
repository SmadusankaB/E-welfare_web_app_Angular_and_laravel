import { TestBed, inject } from '@angular/core/testing';

import { EditFacultyService } from './edit-faculty.service';

describe('EditFacultyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditFacultyService]
    });
  });

  it('should be created', inject([EditFacultyService], (service: EditFacultyService) => {
    expect(service).toBeTruthy();
  }));
});
