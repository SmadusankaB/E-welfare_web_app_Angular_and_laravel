import { TestBed, inject } from '@angular/core/testing';

import { ConfirmdialogService } from './confirmdialog.service';

describe('ConfirmdialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmdialogService]
    });
  });

  it('should be created', inject([ConfirmdialogService], (service: ConfirmdialogService) => {
    expect(service).toBeTruthy();
  }));
});
