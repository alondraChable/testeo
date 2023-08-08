import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPricingComponent } from './month-pricing.component';

describe('MonthPricingComponent', () => {
  let component: MonthPricingComponent;
  let fixture: ComponentFixture<MonthPricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthPricingComponent]
    });
    fixture = TestBed.createComponent(MonthPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
