const isLockNessMonster = require('./index.js')

test('Test 1', () => {
  expect(
    isLockNessMonster(
      'Your girlscout cookies are ready to ship. Your total comes to tree fiddy'
    )
  ).toBeTruthy()
})

test('Test 2', () => {
  expect(
    isLockNessMonster(
      'Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.'
    )
  ).toBeFalsy()
})
