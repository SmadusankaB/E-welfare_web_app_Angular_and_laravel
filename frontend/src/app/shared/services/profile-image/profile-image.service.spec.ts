import { TestBed, inject } from '@angular/core/testing';

import { ProfileImageService } from './profile-image.service';

describe('ProfileImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileImageService]
    });
  });

  it('should be created', inject([ProfileImageService], (service: ProfileImageService) => {
    expect(service).toBeTruthy();
  }));
});
