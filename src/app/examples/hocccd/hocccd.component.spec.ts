import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HocccdComponent } from './hocccd.component';

describe('HocccdComponent', () => {
  let component: HocccdComponent;
  let fixture: ComponentFixture<HocccdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HocccdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HocccdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
