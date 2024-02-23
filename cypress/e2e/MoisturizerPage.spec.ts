import {Fixtures} from "../fixtures";
import {Base} from "../objects/Base";

describe('Shop for suncreens if the weather is above 34 degrees', () => {

    beforeEach(()=> {
        Fixtures.open('')
    })

    after(()=>{

    })

    it('should add two sunscreens to your cart', () => {
        Fixtures.checkTemperature()

    });
})
