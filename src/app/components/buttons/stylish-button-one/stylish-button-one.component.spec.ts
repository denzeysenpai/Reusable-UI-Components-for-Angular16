import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylishButtonOneComponent } from './stylish-button-one.component';

describe('StylishButtonOneComponent', () => {
  let component: StylishButtonOneComponent;
  let fixture: ComponentFixture<StylishButtonOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StylishButtonOneComponent]
    });
    fixture = TestBed.createComponent(StylishButtonOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
