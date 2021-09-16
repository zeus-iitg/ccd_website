import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIitgComponent } from './about-iitg.component';

describe('AboutIitgComponent', () => {
  let component: AboutIitgComponent;
  let fixture: ComponentFixture<AboutIitgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutIitgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIitgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
