const example = require('../dist/example.class')

test('Tem que ser igual', () => {
    expect(10).toBe(example.retorna10())
})

test('Tem que ser null', () => {
    expect(example.retornaNull()).toBeNull()
})

test('Tem que ser Undefined', () => {
    expect(example.retornaUndefined()).toBeUndefined()
})

test('Tem que ser Defined', () => {
    expect(example.retornaDefined()).toBeDefined()
})

test('Tem que ser Verdadeiro', () => {
    expect(example.retornaTrue()).toBeTruthy()
})

test('Tem que ser Mentira', () => {
    expect(example.retornaFalse()).toBeFalsy()
})