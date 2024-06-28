import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flat-button',
  templateUrl: './flat-button.component.html',
  styleUrls: ['./flat-button.component.scss'],
  standalone: true
})
export class FlatButtonComponent {
  @Input() name: string = 'flat button'
  @Input() text: string = 'flat button'
  @Input() type: string = 'submit'

  buttonAction() {
    // your code here

    console.log('Flat button works!')
  }
}
