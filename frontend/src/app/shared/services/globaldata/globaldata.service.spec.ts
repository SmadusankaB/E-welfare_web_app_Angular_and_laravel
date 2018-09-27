import { TestBed, inject } from '@angular/core/testing';

import { GlobaldataService } from './globaldata.service';

describe('GlobaldataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobaldataService]
    });
  });

  it('should be created', inject([GlobaldataService], (service: GlobaldataService) => {
    expect(service).toBeTruthy();
  }));
});
