import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachingIitgComponent } from './reaching-iitg.component';

describe('ReachingIitgComponent', () => {
  let component: ReachingIitgComponent;
  let fixture: ComponentFixture<ReachingIitgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReachingIitgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachingIitgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
