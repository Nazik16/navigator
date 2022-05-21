const Loginpage = require('./../pageobjects/Login.po')

describe('login test suit', function(){    
     it ('should login as admin', function(){
          browser.url('http://167.114.201.175:5000');
          
          Loginpage.userName.setValue("Admin")
          Loginpage.userName.setValue("Admin@Navi")
          Loginpage.loginButton.click();

          
          
          //let loginField = $('input[type="text"]');
          //loginField.setValue('Admin');

          //let passwordField=$('input[type="password"]');
          //passwordField.setValue('Admin@Navi');

          //let loginButton=$('button[type="submit"]');
          //loginButton.click();

          browser.pause(5000);
        
     });
});