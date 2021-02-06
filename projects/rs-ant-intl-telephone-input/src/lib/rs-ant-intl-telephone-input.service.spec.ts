import { TestBed } from '@angular/core/testing';

import { RsAntIntlTelephoneInputService } from './rs-ant-intl-telephone-input.service';

describe('RsAntIntlTelephoneInputService', () => {
  let service: RsAntIntlTelephoneInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RsAntIntlTelephoneInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
