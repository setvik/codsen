/* eslint padded-blocks: 0, no-param-reassign:0, no-loop-func:0 */

import typ from 'type-detect'
import search from 'str-indexes-of-plus'
import slice from 'string-slice'
import strLen from 'string-length'
import trim from 'lodash.trim'
import includes from 'lodash.includes'
import clone from 'lodash.clonedeep'
import numSort from 'num-sort'
import { traverse } from 'ast-monkey'
import arrayiffyIfString from 'arrayiffy-if-string'

function existy(x) { return x != null }
function truthy(x) { return (x !== false) && existy(x) }

function aContainsB(a, b) {
  if (arguments.length < 2) {
    return false
  }
  return String(a).indexOf(String(b)) >= 0
}

function aStartsWithB(a, b) {
  if (!truthy(a) || !truthy(b)) {
    return false
  }
  return a.indexOf(b) === 0
}

function isStr(something) { return typ(something) === 'string' }

function findLastInArray(array, val) {
  let res = null
  if (!existy(val)) {
    return res
  }
  array.forEach((el, i) => {
    if (array[i] === val) {
      res = i
    }
  })
  return res
}

// since v.1.1 str can be equal to heads or tails - there won't be any results
// though (result will be empty array)
function extractVarsFromString(str, heads, tails) {
  if (arguments.length === 0) {
    throw new Error('json-variables/util.js/extractVarsFromString(): inputs missing!')
  }
  const res = []
  if (typ(str) !== 'string') {
    throw new Error(`json-variables/util.js/extractVarsFromString(): first arg must be string-type. Currently it's: ${typ(str)}`)
  }
  if (heads === undefined) {
    heads = ['%%_']
  }
  if (tails === undefined) {
    tails = ['_%%']
  }
  if (typ(heads) !== 'string' && typ(heads) !== 'Array') {
    throw new Error(`json-variables/util.js/extractVarsFromString(): second arg must be a string or an array of strings. Currently it's: ${typ(heads)}`)
  }
  if (typ(tails) !== 'string' && typ(tails) !== 'Array') {
    throw new Error(`json-variables/util.js/extractVarsFromString(): third arg must be a string or an array of strings. Currently it's: ${typ(tails)}`)
  }
  heads = arrayiffyIfString(clone(heads))
  tails = arrayiffyIfString(clone(tails))
  if (includes(heads, str) || includes(tails, str)) {
    return []
  }
  if (str.length === 0) {
    return res
  }
  // var foundHeads = search(str, heads)
  // var foundTails = search(str, tails)
  const foundHeads = heads.reduce((acc, val) => acc.concat(search(str, val)), []).sort(numSort.asc)

  const foundTails = tails.reduce((acc, val) => acc.concat(search(str, val)), []).sort(numSort.asc)

  if ((foundHeads.length !== foundTails.length) && !includes(heads, str) && !includes(tails, str)) {
    throw new Error(`json-variables/util.js/extractVarsFromString(): Mismatching heads and tails in the input:${str}`)
  }

  let to
  let from
  let currentHeadLength
  for (let i = 0, len = foundHeads.length; i < len; i++) {
    heads.forEach((el) => {
      if (aStartsWithB(slice(str, foundHeads[i]), el)) {
        currentHeadLength = strLen(el)
      }
    })
    from = foundHeads[i] + currentHeadLength
    to = foundTails[i]
    res.push(trim(slice(str, from, to)))
  }
  return res
}

// accepts array, where elements are arrays, containing integers or null.
// for example:
// [ [1, 3], [5, null], [null, 16] ]
//
// it's for internal use, so there is no input type validation
function fixOffset(whatever, position, amount) {
  whatever = traverse(whatever, (key, val) => {
    const current = existy(val) ? val : key
    if ((val === undefined) && (typeof key === 'number')) {
      if (existy(amount) && (amount !== 0) && key > position) {
        return key + amount
      }
    }
    return current
  })
  return whatever
}

// extracts all the characters from the front of a string until finds "." or "[".
function front(str) {
  if (!isStr(str)) {
    return str
  }
  return existy(str.match(/\b[^.[]+/)) ? str.match(/\b[^.[]+/)[0] : ''

}

// splits object-path notation into array: "aaa.bbb[ccc]" => ["aaa", "bbb", "ccc"]
function splitObjectPath(str) {
  // console.log('str = ' + JSON.stringify(str, null, 4))
  const re = /\s*[[.*\]]\s*/
  if (!isStr(str)) {
    return str
  }
  const res = str
    .split(re)
    .filter(n => existy(n) && (n.length > 0))
    .map(Function.prototype.call, String.prototype.trim)
  // console.log('res = ' + JSON.stringify(res, null, 4))
  return res

}

export {
  aContainsB,
  aStartsWithB,
  extractVarsFromString,
  findLastInArray,
  fixOffset,
  front,
  splitObjectPath,
}
