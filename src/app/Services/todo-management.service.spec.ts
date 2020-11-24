import { TestBed } from '@angular/core/testing';

import { TODOManagementService } from './todo-management.service';

describe('TODOManagementService', () => {
  let service: TODOManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TODOManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
