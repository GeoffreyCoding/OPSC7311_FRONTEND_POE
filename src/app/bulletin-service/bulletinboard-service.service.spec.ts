import { TestBed } from '@angular/core/testing';

import { BulletinboardServiceService } from './bulletinboard-service.service';

describe('BulletinboardServiceService', () => {
  let service: BulletinboardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulletinboardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
