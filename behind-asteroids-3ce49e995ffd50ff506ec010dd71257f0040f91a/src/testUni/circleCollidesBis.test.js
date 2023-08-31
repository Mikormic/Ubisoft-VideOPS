const cirque = require("../../src/lib/math");

describe(
    'test circleCollides', ()=>{
        test('test circleCollides([5,4],[3,2],1).false', ()=>{
            expect(cirque.circleCollides([5,4],[3,2],1)).toStrictEqual(false)
        })
    }
)