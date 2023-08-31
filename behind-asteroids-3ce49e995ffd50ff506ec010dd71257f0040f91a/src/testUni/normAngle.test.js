const bite = require("../../src/lib/math");

describe(
    'test normAngle', ()=>{
        test('test normAngle(-3*Math.PI/4).-2.356194490192345', ()=>{
            expect(bite.normAngle(-3*Math.PI/4)).toStrictEqual(-2.356194490192345)
        })
    }
)