import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TProfilePage } from './t-profile.page';

describe('TProfilePage', () => {
  let component: TProfilePage;
  let fixture: ComponentFixture<TProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
