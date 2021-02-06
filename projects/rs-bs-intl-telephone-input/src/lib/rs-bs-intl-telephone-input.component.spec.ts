import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsBsIntlTelephoneInputComponent } from './rs-bs-intl-telephone-input.component';

describe('RsBsIntlTelephoneInputComponent', () => {
  let component: RsBsIntlTelephoneInputComponent;
  let fixture: ComponentFixture<RsBsIntlTelephoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsBsIntlTelephoneInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RsBsIntlTelephoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
