const boulot = require("../../src/lib/math");

describe(
    'test dist', ()=>{
        test('test dist([1,2],[3,4]).2.8284271247461903', ()=>{
            expect(boulot.dist([1,2],[3,4])).toStrictEqual(2.8284271247461903)
        })
    }
)