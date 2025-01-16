import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SProfilePage } from './s-profile.page';

describe('SProfilePage', () => {
  let component: SProfilePage;
  let fixture: ComponentFixture<SProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
