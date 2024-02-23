import {Fixtures} from "../fixtures";
import {Base} from "../objects/Base";
import {Weathershopper} from "../support/Weathershopper";

describe('Shop for moisturizers or sunscreens if the weather is below 19 degrees or above 34 degree', () => {

    beforeEach(()=> {
        Fixtures.open('')
    })

    after(()=>{

    })

    it('should navigate to "Moisturizer" or "Sunscreen" page depending on degree', () => {
        Fixtures.checkTemperature()
        cy.url().then(url => {
            if (url === 'https://weathershopper.pythonanywhere.com/moisturizer') {
                cy.log('Navigated to "Moisturizer" page');
            }
            else if (url === 'https://weathershopper.pythonanywhere.com/sunscreen'){
            cy.log('Navigated to "Sunscreens" page')
            }
        });
    });
})
