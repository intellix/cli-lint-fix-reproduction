import { Animation } from '../animations/animation';
import { MenuComponent } from './menu.component';
import { Platform } from '../platform/platform';
import { MenuType } from './menu-type';

/**
 * @private
 * Menu Reveal Type
 * The content slides over to reveal the menu underneath.
 * The menu itself, which is under the content, does not move.
 */
export class MenuRevealType extends MenuType {
  constructor(menu: MenuComponent, plt: Platform) {
    super(plt);

    let openedX = (menu.width() * (menu.side === 'right' ? -1 : 1)) + 'px';

    let menuAni = new Animation(plt, menu.getMenuElement());
    menuAni.fromTo('translateX', '-50%', '0px');
    this.ani.add(menuAni);

    let contentOpen = new Animation(plt, menu.getContentElement());
    contentOpen.fromTo('translateX', '0px', openedX);
    this.ani.add(contentOpen);
  }
}
