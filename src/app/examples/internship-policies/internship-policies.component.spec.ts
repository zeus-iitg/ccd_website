import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipPoliciesComponent } from './internship-policies.component';

describe('InternshipPoliciesComponent', () => {
  let component: InternshipPoliciesComponent;
  let fixture: ComponentFixture<InternshipPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
