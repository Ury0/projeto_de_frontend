import { TestBed } from '@angular/core/testing';

import { DbApiSequalizeExpressService } from './db-api-sequalize-express.service';

describe('DbApiSequalizeExpressService', () => {
  let service: DbApiSequalizeExpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbApiSequalizeExpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
