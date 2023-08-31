/*
 * @jest-environment jsdom
 */
const Class = require("../main");
describe("test Vec", () => {
  test("new Vec(1, 2) return x:1, y:2", () => {
    let result = new Class.Vec(1, 2);
    expect(result).toEqual({ x: 1, y: 2 });
  });
});
describe("test Vec", () => {
  test("new Vec(1, 2).add(new Vec(3, 4)) return x:4, y:6", () => {
    let result = new Class.Vec(1, 2);
    expect(result.add(new Class.Vec(3, 4))).toEqual({ x: 4, y: 6 });
  });
});
describe("test Vec", () => {
  test("new Vec(1, 2).mul(-2, 3) returns {x: -2, y: 6}", () => {
    let result = new Class.Vec(1, 2);
    expect(result.mul(-2, 3)).toEqual({ x: -2, y: 6 });
  });
});
describe("test Vec", () => {
  test("new Vec(1, 2).dot(new Vec(2, 1)) returns 4", () => {
    let result = new Class.Vec(1, 2);
    expect(result.dot(new Class.Vec(2, 1))).toEqual(4);
  });
});
describe("test Vec", () => {
  test("new Vec(1, 2).cross(new Vec(3, 4).mul(-2,3)) returns 24", () => {
    let result = new Class.Vec(1, 2);
    expect(result.cross(new Class.Vec(3, 4).mul(-2,3))).toEqual(24);
  });
});
describe("test Vec", () => {
  test("new Vec(1, 2).dot(new Vec(1, 2).add(new Vec(new Vec(1, 2).dot(new Vec(2, 1)), new Vec(1, 2).cross(new Vec(3, 4).mul(-2,3))))) returns 57", () => {
    let result = new Class.Vec(1, 2);
    expect(result.dot(new Class.Vec(1, 2).add(new Class.Vec(new Class.Vec(1, 2).dot(new Class.Vec(2, 1)), new Class.Vec(1, 2).cross(new Class.Vec(3, 4).mul(-2,3)))))).toEqual(57);
  });
});
describe("test Vec", () => {
  test("new Vec(1, 2).add(3) returns {x: NaN, y: NaN}", () => {
    let result = new Class.Vec(1, 2);
    expect(result.add(3)).toEqual({x: NaN, y: NaN});
  });
});
describe("test Vec", () => {
  test("new Vec(1, 1).cross(new Vec(-42, -42)) returns 0", () => {
    let result = new Class.Vec(1, 1);
    expect(result.cross(new Class.Vec(-42, -42))).toEqual(0);
  });
});
describe("test getTimeStr", () => {
  test("getTimeStr(424242) returns '7:04.24'", () => {
    let result = new Class.GameStatus();
    expect(result.getTimeStr(424242)).toEqual('7:04.24');
  });
});
describe("test getTimeStr", () => {
  test("getTimeStr(-123456) returns '-3:-4.-4'", () => {
    let result = new Class.GameStatus();
    expect(result.getTimeStr(-123456)).toEqual('-3:-4.-4');
  });
});

