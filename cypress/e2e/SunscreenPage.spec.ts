import {Fixtures} from "../fixtures";
import {Weathershopper} from "../support/Weathershopper";
import {Base} from "../objects/Base";

describe('Shop for sunscreens if the weather is below 19 degrees', () => {

    beforeEach(()=> {
        Fixtures.open('')
        Fixtures.open('/sunscreen')
    })

    after(()=>{

    })

  it('should add two sunscreens to your cart', () => {
      Weathershopper.assertLeastExpensiveSunscreensWithSPF50()
      Weathershopper.assertLeastExpensiveSunscreensWithSPF30()
      cy.get(Base.productCard.cartButton).click()
      cy.reload()
    });
  })
