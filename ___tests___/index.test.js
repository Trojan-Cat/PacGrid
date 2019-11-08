const myMethods = require("../index");
const { PLACE, MOVE, callTurn, REPORT } = myMethods;
const closeRead = myMethods.closeRead;

test("Places x 1, y 1, and NORTH, testing legit values", () => {
  expect(PLACE(1, 1, "NORTH")).toMatchObject({ x: 1, y: 1, f: 0 });
});

test("Places x 1, y 1, and NoRTH, testing caps", () => {
  expect(PLACE(1, 1, "NORTH")).toMatchObject({ x: 1, y: 1, f: 0 });
});

test("Places x -1, y 1, and NORTH, testing out of bounds", () => {
  expect(PLACE(-1, 1, "NORTH")).toMatchObject({ x: -1, y: -1, f: -1 });
});

test("Places x 1, y 1, and NOdfRTH, testing out of bounds", () => {
  expect(PLACE(1, 1, "NOdfRTH")).toMatchObject({ x: -1, y: -1, f: -1 });
});

test("Places x 1, y 21, and NORTH, testing wrong numbers", () => {
  expect(PLACE(1, 21, "NORTH")).toMatchObject({ x: -1, y: -1, f: -1 });
});

afterAll(() => {
  closeRead();
});
