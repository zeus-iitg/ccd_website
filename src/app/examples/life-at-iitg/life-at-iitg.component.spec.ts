import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeAtIitgComponent } from './life-at-iitg.component';

describe('LifeAtIitgComponent', () => {
  let component: LifeAtIitgComponent;
  let fixture: ComponentFixture<LifeAtIitgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeAtIitgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeAtIitgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
