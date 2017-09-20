import { AngularNextPlaygroundPage } from './app.po';

describe('angular-next-playground App', () => {
  let page: AngularNextPlaygroundPage;

  beforeEach(() => {
    page = new AngularNextPlaygroundPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
