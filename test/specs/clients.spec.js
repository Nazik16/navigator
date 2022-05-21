describe('title; clients page',function(){
    
    this.beforeEach(function(){
        browser.url(browser.options.baseUrl);
        let loginField=$('input[type="text"]');
        loginField.setValue('Admin');

        let passwordField=$('input[type="password"]');
        passwordField.setValue('Admin@Navi');

        let loginButton=$('button[type="submit"]');
        loginButton.click();
        browser.pause(5000);
    })
    
    afterEach(function(){
        browser.reloadSession();
    })
    
    it ('should add client',function(){
        let button = $('button.clients-add-user-dialog');
        button.click();
        browser.pause(5000);
        let firstname = $('');
        firstname.setValue('');
        
        let lastName = $('');
        lastName.setValue('');
    })

         
    it ('should add client', function(){
        let firstClientButton = $('table.crm-navigator-table tbody tr td span');
        firstClientButton.click();
        browser.pause(5000);
    
    })
})
