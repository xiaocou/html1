import { Stock1Page } from './app.po';

describe('stock1 App', () => {
  let page: Stock1Page;

  beforeEach(() => {
    page = new Stock1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
