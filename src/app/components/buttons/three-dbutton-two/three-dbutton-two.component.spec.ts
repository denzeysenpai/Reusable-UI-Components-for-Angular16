import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDButtonTwoComponent } from './three-dbutton-two.component';

describe('ThreeDButtonTwoComponent', () => {
  let component: ThreeDButtonTwoComponent;
  let fixture: ComponentFixture<ThreeDButtonTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeDButtonTwoComponent]
    });
    fixture = TestBed.createComponent(ThreeDButtonTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
