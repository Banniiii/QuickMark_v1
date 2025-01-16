import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TClassPage } from './t-class.page';

describe('TClassPage', () => {
  let component: TClassPage;
  let fixture: ComponentFixture<TClassPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
