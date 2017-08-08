import { VotePostPage } from './app.po';

describe('vote-post App', () => {
  let page: VotePostPage;

  beforeEach(() => {
    page = new VotePostPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
