import { TestBed, inject } from '@angular/core/testing';

import { TestTableService } from './test-table.service';

describe('TestTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestTableService]
    });
  });

  it('should be created', inject([TestTableService], (service: TestTableService) => {
    expect(service).toBeTruthy();
  }));
});
