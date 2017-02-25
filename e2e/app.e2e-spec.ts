import { ProfilePagePage } from './app.po';

describe('profile-page App', () => {
  let page: ProfilePagePage;

  beforeEach(() => {
    page = new ProfilePagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
