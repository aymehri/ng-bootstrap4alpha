import { browser, by, element } from 'protractor';

export class NgBootstrap4Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('aym-root h1')).getText();
  }
}
