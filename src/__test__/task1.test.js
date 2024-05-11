import { isValidEmail } from '../main'

describe('Email Validation Tests', () => {
  test('Validates a correct email', () => {
    expect(isValidEmail('example@example.com')).toBe(true)
  })

  test('Rejects an email without @ symbol', () => {
    expect(isValidEmail('example.com')).toBe(false)
  })

  test('Rejects an email without domain part', () => {
    expect(isValidEmail('example@')).toBe(false)
  })

  test('Rejects an overly long domain', () => {
    expect(isValidEmail('example@example.abcdef')).toBe(false)
  })

  test('Handles empty string', () => {
    expect(isValidEmail('')).toBe(false)
  })

  test('Handles undefined', () => {
    expect(isValidEmail(undefined)).toBe(false)
  })
})
