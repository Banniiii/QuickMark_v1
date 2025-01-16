import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SSignupPage } from './s-signup.page';

describe('SSignupPage', () => {
  let component: SSignupPage;
  let fixture: ComponentFixture<SSignupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
