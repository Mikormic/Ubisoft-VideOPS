import { describe, expect, test } from "@jest/globals";

import { lerp, mapLinear, randFloatSpread } from "../src/math";

describe("test randFloatSpread", () => {
  test("test randFloatSpread(1).true", () => {
    expect(randFloatSpread(1) <= 1).toStrictEqual(true);
  });
});

describe("test randFloatSpread", () => {
  test("test randFloatSpread(1).true", () => {
    expect(randFloatSpread(1) >= -1).toStrictEqual(true);
  });
});

describe("test mapLinear", () => {
  test("test mapLinear(1,2,3,4,5).3", () => {
    expect(mapLinear(1, 2, 3, 4, 5)).toStrictEqual(3);
  });
});

describe("test mapLinear", () => {
  test("test mapLinear(1,20,3,40,5).0.882352941176471", () => {
    expect(mapLinear(1, 20, 3, 40, 5)).toStrictEqual(0.882352941176471);
  });
});

describe("test lerp", () => {
  test("test lerp(1,3,20).41", () => {
    expect(lerp(1, 3, 20)).toStrictEqual(41);
  });
});
describe("test lerp", () => {
  test("test lerp(1.3,-7,2).-15.3", () => {
    expect(lerp(1.3, -7, 2)).toStrictEqual(-15.3);
  });
});
