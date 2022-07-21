const { palindrome } = require('../utils/for_testing')

test('palindrome david', () => {
    const result = palindrome('david')
    expect(result).toBe('divad')
})

test('palindrome of empty string', ()=> {
    const result = palindrome('')

    expect(result).toBe('')
})

test('palindrome of undefined', ()=> {
    const result = palindrome()

    expect(result).toBeUndefined()
})