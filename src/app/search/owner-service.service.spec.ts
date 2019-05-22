import { TestBed } from '@angular/core/testing';

import { OwnerServiceService } from './owner-service.service';

describe('OwnerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwnerServiceService = TestBed.get(OwnerServiceService);
    expect(service).toBeTruthy();
  });
});
