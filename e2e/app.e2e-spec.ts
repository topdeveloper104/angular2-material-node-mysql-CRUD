import { CRUDDemoPage } from './app.po';

describe('crud-demo App', () => {
  let page: CRUDDemoPage;

  beforeEach(() => {
    page = new CRUDDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
