import { Component } from '@angular/core';
import { state, style, transition, animate, trigger, AnimationPlayer } from '@angular/core';
import { ObservableMedia } from "@angular/flex-layout";

@Component({
  selector: 'xc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(media: ObservableMedia) {
    media.subscribe(v => console.log('Media:', v));
  }

  onToggleChat() {
  }
}
