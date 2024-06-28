import { Component, Input } from '@angular/core';

@Component({
  selector: 'modern-button',
  templateUrl: './modern-button.component.html',
  styleUrls: ['./modern-button.component.scss'],
  standalone: true
})
export class ModernButtonComponent {
  @Input() name: string = 'modern button'
  @Input() text: string = 'modern button'
  @Input() type: string = 'submit'

  buttonAction() {
    // your code here

    console.log('Flat button works!')
  }
}
