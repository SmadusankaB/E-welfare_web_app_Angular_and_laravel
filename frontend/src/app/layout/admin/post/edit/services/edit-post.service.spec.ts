import { TestBed, inject } from '@angular/core/testing';

import { EditPostService } from './edit-post.service';

describe('EditPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditPostService]
    });
  });

  it('should be created', inject([EditPostService], (service: EditPostService) => {
    expect(service).toBeTruthy();
  }));
});
