import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
const HomeGooglePage = require('../../pages/googlePage')

Given("you navigate to {string}", (url) => {
    cy.visit(url)
})

When("you search the word {string}", (searchText) => {
    HomeGooglePage.acceptCookies()
    HomeGooglePage.typeTextToSearch(searchText)
        .should('have.value', searchText)
        .type('{enter}')
})

Then("you validate that the search results are less than {string}", (num) => {
    HomeGooglePage.getTextResult().then((text) => {
        let isLessThan = BigInt(text.split(" ")[1].replaceAll(".", "")) < BigInt(num)
        expect(isLessThan).to.be.true
    })
})

Then("you validate that the search results are more than {string}", (num) => {
    HomeGooglePage.getTextResult().then((text) => {
        let isBiggerThan = BigInt(text.split(" ")[1].replaceAll(".", "")) > BigInt(num)
        expect(isBiggerThan).to.be.true
    })
})