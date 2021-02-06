import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsAntIntlTelephoneInputComponent } from './rs-ant-intl-telephone-input.component';

describe('RsAntIntlTelephoneInputComponent', () => {
  let component: RsAntIntlTelephoneInputComponent;
  let fixture: ComponentFixture<RsAntIntlTelephoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsAntIntlTelephoneInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RsAntIntlTelephoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
