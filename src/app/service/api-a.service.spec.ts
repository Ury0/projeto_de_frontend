import { TestBed } from '@angular/core/testing';

import { ApiAService } from './api-a.service';

describe('ApiAService', () => {
  let service: ApiAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
