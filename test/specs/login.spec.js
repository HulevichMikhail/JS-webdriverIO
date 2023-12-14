import LoginPage from '../pages/login.page.js'

describe('Demo test', () => {
    it('Login test', async () => {
        await LoginPage.open()
        await LoginPage.setUsername('tomsmith')
        await LoginPage.setPassword('SuperSecretPassword!')
        await LoginPage.clickLoginButton()
        await LoginPage.verifyUserLoggedIn('You logged into a secure area!')
    })

    it('Login test with error to show how screenshot function works', async () => {
        await LoginPage.open()
        await LoginPage.setUsername('tomsmith')
        await LoginPage.setPassword('SuperSecretPassword!')
        await LoginPage.clickBrokenLoginButton()
        await LoginPage.verifyUserLoggedIn('You logged into a secure area!')
    })
})