import { NgBootstrap4Page } from './app.po';

describe('ng-bootstrap4 App', () => {
  let page: NgBootstrap4Page;

  beforeEach(() => {
    page = new NgBootstrap4Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to aym!!'))
      .then(done, done.fail);
  });
});
