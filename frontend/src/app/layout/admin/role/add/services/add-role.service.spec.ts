import { TestBed, inject } from '@angular/core/testing';

import { AddRoleService } from './add-role.service';

describe('AddRoleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddRoleService]
    });
  });

  it('should be created', inject([AddRoleService], (service: AddRoleService) => {
    expect(service).toBeTruthy();
  }));
});
