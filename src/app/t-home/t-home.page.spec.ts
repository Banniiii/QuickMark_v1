import { ComponentFixture, TestBed } from '@angular/core/testing';
import { THomePage } from './t-home.page';

describe('THomePage', () => {
  let component: THomePage;
  let fixture: ComponentFixture<THomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(THomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
