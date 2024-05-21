import {
  wordsCount,
  lengthHelper,
  splitHelper,
  replaceSpecialCharactersHelper,
} from 'text-word-count'

describe('Test this awesome library', () => {
  const VALID_CHARACTERS_REGEX = /([^a-zA-Z])/g

  test('Wow it`s amaizing this library exist', () => {
    expect(wordsCount).toBeDefined()
  })

  test('Should be return the word if length >= 2', () => {
    expect(lengthHelper('Correct')).toBe('Correct')
  })

  test('Should be return the word if length >= 2', () => {
    expect(lengthHelper('Ok')).toBe('Ok')
  })

  test('Should be return false if length < 2', () => {
    expect(lengthHelper('F')).toBe(false)
  })

  test('Should split a text in array', () => {
    expect(
      splitHelper('I can not believe it, all this text is now an array')
    ).toBeInstanceOf(Array)
  })

  test('Should remove al special characters', () => {
    const dummyText = 'Let`s see, I wonder, if he has only words?'
    expect(
      replaceSpecialCharactersHelper(dummyText).match(VALID_CHARACTERS_REGEX)
        ? true
        : false
    ).toBe(true)
  })

  test('Final test', () => {
    const dummyText =
      'ok, it should work. And if IT does not WORK, I pay the next beer OK?'
    const expectedResult = {
      ok: 2,
      it: 2,
      should: 1,
      work: 2,
      and: 1,
      if: 1,
      does: 1,
      not: 1,
      pay: 1,
      the: 1,
      next: 1,
      beer: 1,
    }

    expect(wordsCount(dummyText)).toEqual(expectedResult)
  })
})
