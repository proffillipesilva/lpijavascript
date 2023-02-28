const validations = require('../src/validations')

test('Email funciona bem', () => {
  expect(validations.validateEmail("83829bdc")).toBe(false)  
  expect(validations.validateEmail("henrique@rick.com")).toBe(true)
})

test('Password funciona bem', () => {
    expect(validations.validatePassword("83829bdc")).toBe(false) 
    expect(validations.validatePassword("Henrique@!")).toBe(true)
})
