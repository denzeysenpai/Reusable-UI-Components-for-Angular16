import { Component } from '@angular/core';
import { ModernButtonComponent } from './components/buttons/modern-button/modern-button.component';
import { FlatButtonComponent } from './components/buttons/flat-button/flat-button.component';
import { StylishButtonOneComponent } from './components/buttons/stylish-button-one/stylish-button-one.component';
import { StylishButtonTwoComponent } from './components/buttons/stylish-button-two/stylish-button-two.component';
import { StylishButtonThreeComponent } from './components/buttons/stylish-button-three/stylish-button-three.component';
import { StylishButtonFourComponent } from './components/buttons/stylish-button-four/stylish-button-four.component';
import { ThreeDButtonOneComponent } from './components/buttons/three-dbutton-one/three-dbutton-one.component';
import { ThreeDButtonTwoComponent } from './components/buttons/three-dbutton-two/three-dbutton-two.component';
import { ThreeDButtonThreeComponent } from './components/buttons/three-dbutton-three/three-dbutton-three.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'Reusable';
}
