import { validateEmail, validatePassword } from "../src/validations"

test('Email funciona bem', () => {
  expect(validateEmail("83829bdc")).toBe(false)  
  expect(validateEmail("henrique@rick.com")).toBe(true)
})


test('Password funciona bem', () => {
    expect(validatePassword("83829bdc")).toBe(false) 
    expect(validatePassword("Henrique@!")).toBe(true)
})
