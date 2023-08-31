const teub = require("../../src/lib/math");

describe(
    'test smoothstep', ()=>{
        test('smoothstep (1, 2, 3).1', ()=>{
            expect(teub.smoothstep(1, 2, 3)).toStrictEqual(1)
        })
    }
)