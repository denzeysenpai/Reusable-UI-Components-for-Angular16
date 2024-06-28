import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDButtonThreeComponent } from './three-dbutton-three.component';

describe('ThreeDButtonThreeComponent', () => {
  let component: ThreeDButtonThreeComponent;
  let fixture: ComponentFixture<ThreeDButtonThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeDButtonThreeComponent]
    });
    fixture = TestBed.createComponent(ThreeDButtonThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
