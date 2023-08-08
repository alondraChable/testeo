import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuntionsComponent } from './funtions.component';

describe('FuntionsComponent', () => {
  let component: FuntionsComponent;
  let fixture: ComponentFixture<FuntionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuntionsComponent]
    });
    fixture = TestBed.createComponent(FuntionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
