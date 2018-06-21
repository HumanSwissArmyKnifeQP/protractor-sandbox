describe('Protractor Demo App', ()=>{

  it('should have a title', (done)=>{

    console.log('Navigate to the demo page.');
    browser.get('http://juliemr.github.io/protractor-demo/');
    setTimeout(()=>{
      expect(browser.getTitle()).toEqual('Super Calculator');
      done();
    }, 2000);

  });

  it('go to google', (done)=>{

    console.log('Navigate to Google.');
    setTimeout(()=>{
      browser.driver.get('http://www.google.ca');
      expect(browser.driver.getTitle()).toEqual('Google');
      done();
    }, 2000);
    
  });

  it('test failure', ()=>{

    console.log('This test purposefully fails.');
    fail();
  });

});