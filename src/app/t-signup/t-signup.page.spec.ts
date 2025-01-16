import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TSignupPage } from './t-signup.page';

describe('TSignupPage', () => {
  let component: TSignupPage;
  let fixture: ComponentFixture<TSignupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
