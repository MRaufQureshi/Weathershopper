import {Fixtures} from "../fixtures";

describe('Shop for sunscreens if the weather is below 19 degrees', () => {

    beforeEach(()=> {
        Fixtures.open('')
    })

    after(()=>{

    })

  it('should add two sunscreens to your cart', () => {
      Fixtures.checkTemperature()

    });
  })
