import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDButtonOneComponent } from './three-dbutton-one.component';

describe('ThreeDButtonOneComponent', () => {
  let component: ThreeDButtonOneComponent;
  let fixture: ComponentFixture<ThreeDButtonOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeDButtonOneComponent]
    });
    fixture = TestBed.createComponent(ThreeDButtonOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
