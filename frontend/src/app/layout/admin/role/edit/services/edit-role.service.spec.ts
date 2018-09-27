import { TestBed, inject } from '@angular/core/testing';

import { EditRoleService } from './edit-role.service';

describe('EditRoleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditRoleService]
    });
  });

  it('should be created', inject([EditRoleService], (service: EditRoleService) => {
    expect(service).toBeTruthy();
  }));
});
