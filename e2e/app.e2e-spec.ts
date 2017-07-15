import { SwitchPage } from './app.po';

describe('switch App', () => {
  let page: SwitchPage;

  beforeEach(() => {
    page = new SwitchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
