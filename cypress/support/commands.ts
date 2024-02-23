import {Base} from "../objects/Base";

Cypress.Commands.add('getIframe',() => {
    let $body
    return cy.get(Base.cart.stripeIframe)
        .should('be.visible')
        .then(($iframe) => {
            $body = $iframe.contents().find('body')
            cy.wrap($body)
        })
})