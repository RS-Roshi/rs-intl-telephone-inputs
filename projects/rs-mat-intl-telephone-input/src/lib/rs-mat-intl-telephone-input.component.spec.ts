import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsMatIntlTelephoneInputComponent } from './rs-mat-intl-telephone-input.component';

describe('RsMatIntlTelephoneInputComponent', () => {
  let component: RsMatIntlTelephoneInputComponent;
  let fixture: ComponentFixture<RsMatIntlTelephoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsMatIntlTelephoneInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RsMatIntlTelephoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
