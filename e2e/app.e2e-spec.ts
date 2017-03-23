import { XcSportsbook3Page } from './app.po';

describe('xc-sportsbook3 App', () => {
  let page: XcSportsbook3Page;

  beforeEach(() => {
    page = new XcSportsbook3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('xc works!');
  });
});
