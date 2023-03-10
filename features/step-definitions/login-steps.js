import { Given, When, Then } from "@wdio/cucumber-framework";

import FrontPage from '../pageobjects/front-page.js'
import HomePage from '../pageobjects/home-page.js'

Given(/^I am on the front page$/, async() => {
    await FrontPage.open()
})

When (/^I try to login with correct credetial$/, async () => {
    await FrontPage.login('nadhiraff','123masuk')
})

Then(/^I am succesfully logged in$/, async() => {
    await HomePage.verifyLoginSuccess('nadhiraff')
})
