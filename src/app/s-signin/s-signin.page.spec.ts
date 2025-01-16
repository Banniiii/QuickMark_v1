import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SSigninPage } from './s-signin.page';

describe('SSigninPage', () => {
  let component: SSigninPage;
  let fixture: ComponentFixture<SSigninPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SSigninPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
