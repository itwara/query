const assert = require('assert')
const qs = require('..')
const baseUrl = 'https://fang.lousiling.cn'

describe('#main function', function () {
  describe('##url is empty', function() {
    describe('1. url is empty', function() {
        it('should return {}', function() {
            assert.deepStrictEqual({}, qs(baseUrl))
        })
    })
  })
  describe('##neither search nor hash', function() {
    describe('1. https://fang.lousiling.cn', function() {
        it('should return {}', function() {
            assert.deepStrictEqual({}, qs(baseUrl))
        })
    })
  })
  
  describe('##search only', function() {
    describe('1. https://fang.lousiling.cn?a=123&b=456', function() {
        it('should return {a: "123", b: "456"}', function() {
            assert.deepStrictEqual({a: "123", b: "456"}, qs(`${baseUrl}?a=123&b=456`))
        })
    })
    describe('2. https://fang.lousiling.cn?a=123&A=456', function() {
        it('should return {a: "123", b: "456"}', function() {
            assert.deepStrictEqual({a: "123", A: "456"}, qs(`${baseUrl}?a=123&A=456`))
        })
    })
  })
  
  
  describe('##hash only', function() {
    describe('1. https://fang.lousiling.cn#a=123&b=456', function() {
        it('should return {a: "123", b: "456"}', function() {
            assert.deepStrictEqual({a: "123", b: "456"}, qs(`${baseUrl}#a=123&b=456`))
        })
    })
    describe('2. https://fang.lousiling.cn#/?a=123&b=456', function() {
        it('should return {a: "123", b: "456"}', function() {
            assert.deepStrictEqual({a: "123", b: "456"}, qs(`${baseUrl}#/?a=123&b=456`))
        })
    })
  })
  
  describe('##both search and hash ', function() {
    describe('1. https://fang.lousiling.cn?a=123#/?b=456', function() {
        it('should return {a: "123", b: "456"}', function() {
            assert.deepStrictEqual({a: "123", b: "456"}, qs(`${baseUrl}?a=123#/?b=456`))
        })
    })
    describe('2. https://fang.lousiling.cn?a=789&b=012#/?a=123&b=456', function() {
        it('should return {a: "123", b: "456"}', function() {
            assert.deepStrictEqual({a: "123", b: "456"}, qs(`${baseUrl}?a=789&b=012#/?a=123&b=456`))
        })
    })
  })
  
  describe('##decode', function() {
    describe('1. https%3A%2F%2Ffang.lousiling.cn%3Fa%3D123%26b%3D456%23%2F%3Fa%3D789%26b%3D012', function() {
        it('should return {a: "123", b: "456"}', function() {
            assert.deepStrictEqual({a: "123", b: "456"}, qs(`${baseUrl}%3Fa%3D789%26b%3D012%23%2F%3Fa%3D123%26b%3D456`))
        })
    })
  })
})

