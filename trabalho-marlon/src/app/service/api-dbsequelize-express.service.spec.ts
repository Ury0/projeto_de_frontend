import { TestBed } from '@angular/core/testing';

import { ApiDBsequelizeExpressService } from './api-dbsequelize-express.service';

describe('ApiDBsequelizeExpressService', () => {
  let service: ApiDBsequelizeExpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDBsequelizeExpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
