import Page from './page.js'
import { allureStep} from '../../helper/allureHelper.js'

class LoginPage extends Page {

    get usernameTextbox () { return $('#username') }
    get passwordTextbox () { return $('#password') }
    get loginButton () { return $('button[type="submit"]') }
    get brokenLoginButton () { return $('button[type="submit1341414"]') } // just for example how allure report handle errors
    get loginMessage () { return $('#flash') }

    open() {
        return allureStep('Open Login page', () => 
           super.open('login')
        )
    }

    async setUsername(user) {
        return allureStep(`Set username '${user}'`, async () =>
            await this.usernameTextbox.setValue(user)
        )
    }

    async setPassword(password) {
        return allureStep(`Set password '${password}'`, async () =>
            await this.passwordTextbox.setValue(password)
        )
    }

    async clickLoginButton(){
        return allureStep(`Click login button`, async () =>
            await this.loginButton.click()
        )
    }

    async clickBrokenLoginButton(){
        return allureStep(`Click broken login button`, async () =>
            await this.brokenLoginButton.click()
        )
    }

    async verifyUserLoggedIn(msg){
        return allureStep(`Verify that user logged in`, async () =>
            await expect(this.loginMessage).toHaveTextContaining(msg)
        )
    }
}

export default new LoginPage()