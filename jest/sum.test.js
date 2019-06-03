function sum(a,b) {
    return a + b;
}

test('Add 1 + 2 equals to 3', () => {
    expect(sum(1,2)).toBe(3); //assert
});

test('Add 1 + 1 not equals to 3', () => {
    expect(sum(1,1)).toBe(3); //assert
});