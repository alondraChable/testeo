import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingExtendedComponent } from './pricing-extended.component';

describe('PricingExtendedComponent', () => {
  let component: PricingExtendedComponent;
  let fixture: ComponentFixture<PricingExtendedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricingExtendedComponent]
    });
    fixture = TestBed.createComponent(PricingExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
