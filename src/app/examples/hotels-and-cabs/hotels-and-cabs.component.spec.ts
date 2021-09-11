import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsAndCabsComponent } from './hotels-and-cabs.component';

describe('HotelsAndCabsComponent', () => {
  let component: HotelsAndCabsComponent;
  let fixture: ComponentFixture<HotelsAndCabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsAndCabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsAndCabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
