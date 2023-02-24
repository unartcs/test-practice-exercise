const orderTotal = require('./order-total')

it('Quantity', () =>
expect(orderTotal({
    items: [
        { name: 'Dragon Food', price: 8, quantity: 4 },
        { name: 'Dragon Cage (small)', price: 800, quantity: 2 }
    ]
})).toBe(1632))

it('No Quantity Specified', () =>
expect(orderTotal({
    items: [
        { name: 'Dragon treat', price: 2 },
        { name: 'Dragon chew toy', price: 40 }
    ]
})).toBe(42))

it('Happy path example(1)', () =>
expect(orderTotal({
    items: [
        { name: 'Dragon food', price: 8, quantity: 30 },
        { name: 'Dragon cage (small)', price: 800, quantity: 5 }
    ]
})).toBe(4240))