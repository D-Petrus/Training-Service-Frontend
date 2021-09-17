import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferSendComponent } from './offer-send.component';

describe('OfferSendComponent', () => {
  let component: OfferSendComponent;
  let fixture: ComponentFixture<OfferSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferSendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
