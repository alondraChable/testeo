import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfRightsComponent } from './types-of-rights.component';

describe('TypesOfRightsComponent', () => {
  let component: TypesOfRightsComponent;
  let fixture: ComponentFixture<TypesOfRightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypesOfRightsComponent]
    });
    fixture = TestBed.createComponent(TypesOfRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
