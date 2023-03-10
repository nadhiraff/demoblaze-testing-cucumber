import { Given, When, Then } from "@wdio/cucumber-framework";

import FrontPage from '../pageobjects/front-page.js'
import HomePage from '../pageobjects/home-page.js'

Given(/^I am on the home page$/, async() => {
    await HomePage.verifyLoginSuccess('nadhiraff')
})

When (/^I click logout button$/, async () => {
    await HomePage.buttonLogout.click()
})

Then(/^I am succesfully logged out$/, async() => {
    await HomePage.verifyLogout()
})
