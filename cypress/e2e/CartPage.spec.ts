import {Fixtures} from "../fixtures";
import {Base} from "../objects/Base";
import {Weathershopper} from "../support/Weathershopper";

describe('Verify that the shopping cart looks correct', () => {

    beforeEach(()=> {
        Fixtures.open('/moisturizer')
    })

    after(()=>{

    })

    it('should fill out payment details and submit the form', () => {
        Weathershopper.assertLeastExpensiveMositurizerWithAloe()
        cy.get(Base.productCard.cartButton).click()
        cy.reload()
        cy.get(Base.cart.payButton).click()
        cy.getIframe().find(Base.payment.email).type('test@test.com')
        cy.wait(2000)
        cy.getIframe().find(Base.payment.cardNumber).type('4242 4242 4242 4242')
        cy.getIframe().find(Base.payment.expiryDate).type('1234')
        cy.getIframe().find(Base.payment.cvcCode).type('007')
        cy.getIframe().find(Base.payment.zipCode).type('00001')
        cy.getIframe().find(Base.payment.submitButton).click()
        cy.get(Base.confirmation.header).should('have.text','PAYMENT SUCCESS')
    });
})
