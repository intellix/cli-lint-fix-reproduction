import { Directive, EventEmitter, Input, ElementRef, Renderer, ContentChildren, QueryList } from '@angular/core';
// import { Nav } from '../nav/nav';
import { MenuComponent } from '../menu/menu.component';

const LARGE_QUERY = '(max-width: 1000px)';
const MEDIUM_QUERY = '(max-width: 600px)';
const SMALL_QUERY = '(max-width: 400px)';

/**
 * @name Nav
 * @description
 *
 *
 */
@Directive({
  selector: 'ion-split-panel',
})
export class SplitPanelDirective {
  _mediaQuery: string = MEDIUM_QUERY;

  ionChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  // @ContentChildren(Nav) _navs: QueryList<Nav>;
  @ContentChildren(MenuComponent) _menus: QueryList<MenuComponent>;

  constructor(
    private _renderer: Renderer,
    private _elementRef: ElementRef,
  ) { }

  @Input()
  set when(size: string) {
    if (size === 'large') {
      this._mediaQuery = LARGE_QUERY;
    } else if (size === 'medium') {
      this._mediaQuery = MEDIUM_QUERY;
    } else if (size === 'small') {
      this._mediaQuery = SMALL_QUERY;
    }
    console.error('invalida when value');
  }

  ngAfterViewInit() {
    const mediaList = window.matchMedia(this._mediaQuery);
    mediaList.addListener(this.update.bind(this));
    this.update(mediaList);
  }

  update(mediaList: MediaQueryList) {
    const hidden = mediaList.matches;
    this.setElementClass('split-panel-hidden', hidden);
    this.setElementClass('split-panel-visible', !hidden);
    if (!hidden) {
      // this._navs.forEach((nav) => nav.resize());
      this._menus.forEach((menu) => menu.setIsPanel(true));
    } else {
      this._menus.forEach((menu) => menu.setIsPanel(false));
    }
    this.ionChange.emit(hidden);
  }

  setElementClass(className: string, add: boolean) {
    this._renderer.setElementClass(this._elementRef.nativeElement, className, add);
  }

  ngOnDestroy() {

  }
}
