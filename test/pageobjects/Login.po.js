class LoginPage{
    get userName() {return $('input{type="text"}')};
    get password() {return $('input{type="password"}')};
    get loginButton() {return $('button[type="submit"]')};

open(){
    browser.url(browser.options.baseUrl + '/login');
}
fillUserName(someUserName){
    this.userName.setVale(someUserName);
    this.password.setVale(somePassword);
    this.loginButton.click();
    browser.pause(5000);

}

module.exports = new LoginPage