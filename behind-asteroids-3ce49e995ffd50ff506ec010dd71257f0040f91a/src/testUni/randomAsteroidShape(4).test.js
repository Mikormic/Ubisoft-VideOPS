const randomAsteroidShape = require("../asteroids");

describe(
    'test randomAsteroidShape', ()=>{
        test('test randomAsteroidShape(4).length returns 12', ()=>{
            expect(randomAsteroidShape(4).length).toStrictEqual(12)
        })
    }
)