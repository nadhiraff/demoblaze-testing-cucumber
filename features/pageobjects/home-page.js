// const Page = require('./page')
import Page from './page.js'

class HomePage extends Page {

    get accountName() {
        return $('#nameofuser')
    }

    get buttonLogout() {
        return $(`[onclick='logOut()']`)
    }

    get buttonCart() {
        return $(`[onclick='cart()']`)
    }

    async verifyLoginSuccess(user) {
        return await expect(await this.accountName).toHaveTextContaining(user)
    }

    async verifyLogout(){
        return await HomePage
    }
}

// module.exports = new HomePage();
export default new HomePage()