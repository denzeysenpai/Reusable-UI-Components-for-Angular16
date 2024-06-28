import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylishButtonThreeComponent } from './stylish-button-three.component';

describe('StylishButtonThreeComponent', () => {
  let component: StylishButtonThreeComponent;
  let fixture: ComponentFixture<StylishButtonThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StylishButtonThreeComponent]
    });
    fixture = TestBed.createComponent(StylishButtonThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
