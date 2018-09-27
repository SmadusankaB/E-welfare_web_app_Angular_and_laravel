import { TestBed, inject } from '@angular/core/testing';

import { ChangesService } from './changes.service';

describe('ChangesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangesService]
    });
  });

  it('should be created', inject([ChangesService], (service: ChangesService) => {
    expect(service).toBeTruthy();
  }));
});
