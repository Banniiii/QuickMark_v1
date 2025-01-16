import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TAttendancePage } from './t-attendance.page';

describe('TAttendancePage', () => {
  let component: TAttendancePage;
  let fixture: ComponentFixture<TAttendancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TAttendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
