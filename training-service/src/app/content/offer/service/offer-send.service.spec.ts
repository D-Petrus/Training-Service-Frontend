import { TestBed } from '@angular/core/testing';

import { OfferSendService } from './offer-send.service';

describe('OfferSendService', () => {
  let service: OfferSendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferSendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
