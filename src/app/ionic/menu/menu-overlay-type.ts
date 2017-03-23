import { Animation } from '../animations/animation';
import { MenuComponent } from './menu.component';
import { Platform } from '../platform/platform';
import { MenuType } from './menu-type';

/**
 * @private
 * Menu Overlay Type
 * The menu slides over the content. The content
 * itself, which is under the menu, does not move.
 */
export class MenuOverlayType extends MenuType {
  constructor(menu: MenuComponent, plt: Platform) {
    super(plt);

    let closedX: string, openedX: string;
    if (menu.side === 'right') {
      // right side
      closedX = 8 + menu.width() + 'px';
      openedX = '0px';

    } else {
      // left side
      closedX = -(8 + menu.width()) + 'px';
      openedX = '0px';
    }

    let menuAni = new Animation(plt, menu.getMenuElement());
    menuAni.fromTo('translateX', closedX, openedX);
    this.ani.add(menuAni);

    let backdropApi = new Animation(plt, menu.getBackdropElement());
    backdropApi.fromTo('opacity', 0.01, 0.35);
    this.ani.add(backdropApi);
  }
}
