// launchcode.test.js code:
const launchcode = require("../index.js");

describe("Testing launchcode", function () {
  // Write your unit tests here!
  test("Has a organization", () => {
    expect(launchcode.organization).toContain("nonprofit");
  });

  test("Has a excecutive director", () => {
    expect(launchcode.executiveDirector).toContain("Jeff");
  });

  test("Has a percentageCoolEmployees", () => {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });

  test("programs offered has length of 3", () => {
    expect(launchcode.programsOffered.length).toBe(3);
  });
  test("programs offered has three strings", () => {
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
  });
  test("when passed a number that is ONLY divisible by 2, return 'Launch!'", () => {
    expect(launchcode.launchOutput(4)).toBe("Launch!");
  });
  test("when passed a number that is ONLY divisible by 3, return 'Code!'", () => {
    expect(launchcode.launchOutput(6)).toBe("Code!");
  });

  test("When passed a number that is ONLY divisible by 5, return 'Rocks!'", () => {
    expect(launchcode.launchOutput(25)).toBe("Rocks!");
  });
});
