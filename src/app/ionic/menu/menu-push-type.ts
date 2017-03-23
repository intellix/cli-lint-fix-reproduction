import { Animation } from '../animations/animation';
import { MenuComponent } from './menu.component';
import { Platform } from '../platform/platform';
import { MenuType } from './menu-type';

/**
 * @private
 * Menu Push Type
 * The content slides over to reveal the menu underneath.
 * The menu itself also slides over to reveal its bad self.
 */
export class MenuPushType extends MenuType {
  constructor(menu: MenuComponent, plt: Platform) {
    super(plt);

    let contentOpenedX: string, menuClosedX: string, menuOpenedX: string;

    if (menu.side === 'right') {
      // right side
      contentOpenedX = -menu.width() + 'px';
      menuClosedX = menu.width() + 'px';
      menuOpenedX = '0px';

    } else {
      contentOpenedX = menu.width() + 'px';
      menuOpenedX = '0px';
      menuClosedX = -menu.width() + 'px';
    }

    let menuAni = new Animation(plt, menu.getMenuElement());
    menuAni.fromTo('translateX', menuClosedX, menuOpenedX);
    this.ani.add(menuAni);

    let contentApi = new Animation(plt, menu.getContentElement());
    contentApi.fromTo('translateX', '0px', contentOpenedX);
    this.ani.add(contentApi);
  }
}
