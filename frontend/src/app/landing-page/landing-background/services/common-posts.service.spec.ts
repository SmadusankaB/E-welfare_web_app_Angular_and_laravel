import { TestBed, inject } from '@angular/core/testing';

import { CommonPostsService } from './common-posts.service';

describe('CommonPostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonPostsService]
    });
  });

  it('should be created', inject([CommonPostsService], (service: CommonPostsService) => {
    expect(service).toBeTruthy();
  }));
});
