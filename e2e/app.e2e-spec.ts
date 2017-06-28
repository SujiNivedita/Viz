import { PrintVizPage } from './app.po';

describe('print-viz App', () => {
  let page: PrintVizPage;

  beforeEach(() => {
    page = new PrintVizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
