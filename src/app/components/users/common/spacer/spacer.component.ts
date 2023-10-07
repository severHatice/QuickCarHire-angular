import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spacer',
  template: `<div [style.height.px]="height"></div>`
})
export class SpacerComponent {
  @Input() height: number = 100;
}
