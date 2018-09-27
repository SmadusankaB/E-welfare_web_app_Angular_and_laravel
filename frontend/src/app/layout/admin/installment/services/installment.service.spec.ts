import { TestBed, inject } from '@angular/core/testing';

import { InstallmentService } from './installment.service';

describe('InstallmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstallmentService]
    });
  });

  it('should be created', inject([InstallmentService], (service: InstallmentService) => {
    expect(service).toBeTruthy();
  }));
});
