import {createMap} from "../src/utils/createMap";

describe("createMap", () => {
  it("should return a valid map", async () => {
    const result = createMap(5, 3, 0)


    expect(result).toBeDefined();
    expect(typeof result).toBe('object')

    expect(result.length).toBe(5)
    expect(result[0].length).toBe(3)

    for (let row of result) {
      for (let cell of row) {
        expect(typeof cell).toBe('boolean')
      }
    }
  });

  it("should have all false cells along the border", async () => {
    const result = createMap(3, 3, 1)

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (r !== 1 && c !== 1) {
          expect(result[r][c]).toBeFalsy()
        }

      }
    }
  });
});
