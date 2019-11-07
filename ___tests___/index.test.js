const PLACE = require('../index');

test('Places x 1, y 1, and NORTH', () => {
  expect(PLACE(1, 1,"NORTH")).toMatchObject({x: 1, y:1, f:0});
});

test('Places x -1, y 1, and NORTH', () => {
  expect(PLACE(-1, 1,"NORTH")).toMatchObject({x: -1, y:-1, f:-1});
});