import isAvailable from './actions'

test('Returns true when action exists', () => {
  expect(isAvailable('postman')).toEqual(true)
})
