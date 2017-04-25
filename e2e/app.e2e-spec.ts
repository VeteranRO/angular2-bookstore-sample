import { FirstAngular2ApPage } from './app.po';

describe('first-angular2-ap App', function() {
  let page: FirstAngular2ApPage;

  beforeEach(() => {
    page = new FirstAngular2ApPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
