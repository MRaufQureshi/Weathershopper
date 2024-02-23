import {Fixtures} from "../fixtures";
import {Base} from "../objects/Base";
import {Weathershopper} from "../support/Weathershopper";

describe('Shop for moisturizers if the weather is below 19 degrees', () => {

    beforeEach(()=> {
        Fixtures.open('/moisturizer')
    })

    after(()=>{

    })

    it('should add two moisturizers to your cart', () => {
        Weathershopper.assertLeastExpensiveMositurizerWithAloe()
        Weathershopper.assertLeastExpensiveMositurizerWithAlmond()
        cy.get(Base.productCard.cartButton).click()
        cy.reload()
    });

})
