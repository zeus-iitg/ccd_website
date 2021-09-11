import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduatingStudentsComponent } from './graduating-students.component';

describe('GraduatingStudentsComponent', () => {
  let component: GraduatingStudentsComponent;
  let fixture: ComponentFixture<GraduatingStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduatingStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduatingStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
