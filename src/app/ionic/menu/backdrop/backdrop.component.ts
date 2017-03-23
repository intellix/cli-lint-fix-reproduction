import { Component, ElementRef, Renderer } from '@angular/core';

/**
 * @private
 */
@Component({
  selector: 'ion-backdrop',
  template: '',
  styleUrls: ['./backdrop.component.scss'],
  host: {
    'role': 'presentation',
    'tappable': '',
    'disable-activated': ''
  },
})
export class BackdropComponent {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) { }

  getNativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  setElementClass(className: string, add: boolean) {
    this.renderer.setElementClass(this.elementRef.nativeElement, className, add);
  }

}
