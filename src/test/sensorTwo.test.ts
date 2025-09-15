import { describe, expect, it } from "vitest";
import { isValidSensorValue } from "../sensor";

describe("isBrokenSensor()", () => {
  it("returns false for values inside 0 and 150", () => {
    expect(isValidSensorValue(50)).toBe(false);
  });

  it("returns true for negative values", () => {
    expect(isValidSensorValue(-1)).toBe(true);
  });

  it("returns true for values above 100", () => {
    expect(isValidSensorValue(101)).toBe(true);
  });
});
