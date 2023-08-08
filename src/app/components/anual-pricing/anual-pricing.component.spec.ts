import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualPricingComponent } from './anual-pricing.component';

describe('AnualPricingComponent', () => {
  let component: AnualPricingComponent;
  let fixture: ComponentFixture<AnualPricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnualPricingComponent]
    });
    fixture = TestBed.createComponent(AnualPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
