const longue = require("../../src/lib/math");

describe(
    'test length', ()=>{
        test('test length([-3,-7]).7.615773105863909', ()=>{
            expect(longue.length([-3,-7])).toStrictEqual(7.615773105863909)
        })
    }
)