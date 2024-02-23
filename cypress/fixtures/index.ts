import {Base} from "../objects/Base";

/**
 * main page initialisation containing functionality
 * that is shared across all test cases
 */
export class Fixtures {

  public static checkTemperature():void{
    let temp;
    try {
      /* If temperature is less than 19, navigate to "Moisturizer" page */
      temp = cy.get(Base.landingPage.temperature)

      if (temp < 19) {
        cy.get(Base.landingPage.moisturizerButton).click()
      }

      /* If temperature is greater than 34, navigate to "Sunscreen" page */
      else if (temp > 34) {
        cy.get(Base.landingPage.sunscreenButton).click()
      }
      // Do nothing if temperature is ok
      else {
        console.log('Temperature is ok!!');
      }
    } catch (error) {
      console.error(error);
    }
  }

  public static open(path){
    return cy.visit(path);
  }
}
