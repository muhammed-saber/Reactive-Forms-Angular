import { NgFormsPage } from './app.po';

describe('ng-forms App', () => {
  let page: NgFormsPage;

  beforeEach(() => {
    page = new NgFormsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
