'use strict'

const MIN_LENGTH = 2
const VALID_CHARACTERS_REGEX = /([^a-zA-Z])/g
const CASE_SENSITIVE = true

/**
 * Check if the word have the correct length or return false.
 * @param {string} String text of which you want to measure.
 * @return {string || false}
 */
const lengthHelper = word => {
  const result = word.length >= MIN_LENGTH ? word : false
  return result
}

/**
 * Split a string in an array
 * @param {string} String text of which you want to split.
 * @return {array}
 */
const splitHelper = word => {
  const result = word.split(/\s+/)
  return result
}

/**
 * Clean the text with a regex.
 * @param {string} String text of which you want to clean.
 * @return {string}
 */
const replaceSpecialCharactersHelper = word => {
  const result = word.replace(VALID_CHARACTERS_REGEX, ' ')
  return result
}

/**
 * Filter an array, without empty values or less than what you expect.
 * @param {array} array of which you want to filter.
 * @return {array}
 */
const filterArraytHelper = text => {
  const result = text.filter(word => {
    if (word != '' && lengthHelper(word) != false) {
      return word
    }
  })
  return result
}

/**
 * Counts words from a text and return an array with this words and the number of repeats.
 * @param {string} String text of which you want to count the words.
 * @return {array} An array that contains the counted words
 */
const wordsCount = text => {
  const cleanedText = replaceSpecialCharactersHelper(text)
  const splitedText = splitHelper(cleanedText)
  const filteredArray = filterArraytHelper(splitedText)
  const countTextSummary = filteredArray.reduce((map, word) => {
    let w = CASE_SENSITIVE ? word.toLowerCase() : word
    map[w] = typeof map[w] !== 'undefined' ? ++map[w] : 1
    return map
  }, {})

  return countTextSummary
}

module.exports.wordsCount = wordsCount
module.exports.lengthHelper = lengthHelper
module.exports.splitHelper = splitHelper
module.exports.filterArraytHelper = filterArraytHelper
module.exports.replaceSpecialCharactersHelper = replaceSpecialCharactersHelper
