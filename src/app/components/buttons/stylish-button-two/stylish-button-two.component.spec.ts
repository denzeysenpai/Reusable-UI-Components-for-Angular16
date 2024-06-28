import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylishButtonTwoComponent } from './stylish-button-two.component';

describe('StylishButtonTwoComponent', () => {
  let component: StylishButtonTwoComponent;
  let fixture: ComponentFixture<StylishButtonTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StylishButtonTwoComponent]
    });
    fixture = TestBed.createComponent(StylishButtonTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
