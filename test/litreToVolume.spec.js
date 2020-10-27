const assert = require('assert').strict; 
const litreToVolume = require('../service/litreToVolume'); 

describe("Test de conversion litre vers volume", function() {
    it("should return 1000", function() {
        let res = litreToVolume.cubeToLitre(1000,"ml","cm3")
        assert.strictEqual(res,1000)
    });
    it("should return 1", function() {
        let res = litreToVolume.cubeToLitre(1000,"ml","dm3")
        assert.strictEqual(res,1)
    }); 
    
    it("should return 10000", function() {
        let res = litreToVolume.cubeToLitre(1000,"cl","cm3")
        assert.strictEqual(res,10000)

    });  

});