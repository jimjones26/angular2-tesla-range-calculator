import { Angular2TeslaRangeCalculatorPage } from './app.po';

describe('angular2-tesla-range-calculator App', function() {
  let page: Angular2TeslaRangeCalculatorPage;

  beforeEach(() => {
    page = new Angular2TeslaRangeCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
