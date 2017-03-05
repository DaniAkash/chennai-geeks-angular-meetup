import { Tasks } from './app.po';

describe('tasks App', () => {
  let page: Tasks;

  beforeEach(() => {
    page = new Tasks();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
