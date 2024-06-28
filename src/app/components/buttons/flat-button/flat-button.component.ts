import { Component, Input } from '@angular/core';

@Component({
  selector: 'flat-button',
  templateUrl: './flat-button.component.html',
  styleUrls: ['./flat-button.component.scss'],
  standalone: true
})
export class FlatButtonComponent {
  @Input() corners : string = '0px'
  @Input() name : string = 'flat button'
  @Input() id : string = 'flat button'
}
