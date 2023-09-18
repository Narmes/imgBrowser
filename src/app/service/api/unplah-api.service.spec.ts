import { TestBed } from '@angular/core/testing';

import { UnplahApiService } from './unplah-api.service';

describe('UnplahApiService', () => {
  let service: UnplahApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnplahApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
