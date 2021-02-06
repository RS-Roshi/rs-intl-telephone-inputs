import { TestBed } from '@angular/core/testing';

import { RsBsIntlTelephoneInputService } from './rs-bs-intl-telephone-input.service';

describe('RsBsIntlTelephoneInputService', () => {
  let service: RsBsIntlTelephoneInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RsBsIntlTelephoneInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
