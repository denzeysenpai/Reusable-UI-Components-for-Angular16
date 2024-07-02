import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'stylish-button-one',
  templateUrl: './stylish-button-one.component.html',
  styleUrls: ['./stylish-button-one.component.scss'],
  standalone: true
})
export class StylishButtonOneComponent {
  mouseEnt(id: string) {
    const bg = document.querySelector("#stylish-button-background-one-componenet")
    if (bg) {
      switch (id) {
        case "l":
          bg.setAttribute('style', 'background-position: right;')
          break;
        case "m":
          bg.setAttribute('style', 'background-position: center;')
          break;
        case "r":
          bg.setAttribute('style', 'background-position: left;')
          break;
        default: break;
      }
    }
  }

  mouseL() {
    const bg = document.querySelector("#stylish-button-background-one-componenet")
    if (bg) {
      bg.setAttribute('style', 'background-position: center;')
    }
  }
}
