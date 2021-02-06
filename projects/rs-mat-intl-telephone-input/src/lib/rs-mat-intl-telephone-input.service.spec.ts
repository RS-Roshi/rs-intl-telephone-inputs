import { TestBed } from '@angular/core/testing';

import { RsMatIntlTelephoneInputService } from './rs-mat-intl-telephone-input.service';

describe('RsMatIntlTelephoneInputService', () => {
  let service: RsMatIntlTelephoneInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RsMatIntlTelephoneInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
