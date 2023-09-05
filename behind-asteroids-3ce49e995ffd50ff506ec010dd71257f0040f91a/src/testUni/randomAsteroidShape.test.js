import randomAsteroidShape from "../asteroids";

describe(
    'test randomAsteroidShape', ()=>{
        test('test randomAsteroidShape(0) returns [[0, 0], [0, 0], [0, 0], [0, 0]]', ()=>{
            expect(randomAsteroidShape(0)).toStrictEqual([[0, 0], [0, 0], [-0, 0], [-0, -0]])
        })
    }
)