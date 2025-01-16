import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TSigninPage } from './t-signin.page';

describe('TSigninPage', () => {
  let component: TSigninPage;
  let fixture: ComponentFixture<TSigninPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TSigninPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
