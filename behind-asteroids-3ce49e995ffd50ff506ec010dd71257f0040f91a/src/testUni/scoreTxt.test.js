const salope = require("../../src/lib/math");

describe(
    'test scoreTxt', ()=>{
        test('test  scoreTxt(7).7', ()=>{
            expect(salope.scoreTxt(7)).toStrictEqual("07")
        })
    }
)