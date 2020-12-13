import { TestBed } from '@angular/core/testing';

import { GetProductServiceService } from './get-product-service.service';

describe('GetProductServiceService', () => {
  let service: GetProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
