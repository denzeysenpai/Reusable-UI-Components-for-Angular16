import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylishButtonFourComponent } from './stylish-button-four.component';

describe('StylishButtonFourComponent', () => {
  let component: StylishButtonFourComponent;
  let fixture: ComponentFixture<StylishButtonFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StylishButtonFourComponent]
    });
    fixture = TestBed.createComponent(StylishButtonFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
