const cirque = require("../../src/lib/math");

describe(
    'test circleCollides', ()=>{
        test('test circleCollides([1,2],[3,4],5).true', ()=>{
            expect(cirque.circleCollides([1,2],[3,4],5)).toStrictEqual(true)
        })
    }
)