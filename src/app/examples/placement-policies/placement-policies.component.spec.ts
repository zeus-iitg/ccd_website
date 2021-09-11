import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementPoliciesComponent } from './placement-policies.component';

describe('PlacementPoliciesComponent', () => {
  let component: PlacementPoliciesComponent;
  let fixture: ComponentFixture<PlacementPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
