const boulotBis = require("../../src/lib/math");

describe(
    'test dist', ()=>{
        test('testdist([-3,-7],[123,42]).135.19245541079576', ()=>{
            expect(boulotBis.dist([-3,-7],[123,42])).toStrictEqual(135.19245541079576)
        })
    }
)