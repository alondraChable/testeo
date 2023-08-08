import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasLegalesComponent } from './areas-legales.component';

describe('AreasLegalesComponent', () => {
  let component: AreasLegalesComponent;
  let fixture: ComponentFixture<AreasLegalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreasLegalesComponent]
    });
    fixture = TestBed.createComponent(AreasLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
