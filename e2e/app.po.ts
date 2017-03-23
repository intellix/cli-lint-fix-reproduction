import { browser, element, by } from 'protractor';

export class XcSportsbook3Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('xc-root h1')).getText();
  }
}
