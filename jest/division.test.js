const getDivision = require('./division');

//Invalid cases

test('Percentage greater than 100 is invalid', () => {
    const percentage = 100.5;
    const expectedDivision = 'Invalid';

    const actualDivision = getDivision(percentage);

    expect(actualDivision).toBe(expectedDivision);
});

test('Percentage less than 0 is invalid', () => {
    const percentage = -2;
    const expectedDivision = 'Invalid';

    const actualDivision = getDivision(percentage);

    expect(actualDivision).toBe(expectedDivision);
});

//Case for distinction

test('80 percentage is distinction', () => {
    const percentage = 80;
    const expectedDivision = 'Distinction';
  
    const actualDivision = getDivision(percentage);
  
    expect(actualDivision).toBe(expectedDivision);
});
  
test('100 percentage is distinction', () => {
    const percentage = 100;
    const expectedDivision = 'Distinction';
  
    const actualDivision = getDivision(percentage);
  
    expect(actualDivision).toBe(expectedDivision);
});

test('90 percentage is distinction', () => {
    const percentage = 90;
    const expectedDivision = 'Distinction';

    const actualDivision = getDivision(percentage);

    expect(actualDivision).toBe(expectedDivision);
});

//Case for first division

test('60 percentage is first division', () => {
    const percentage = 60;
    const expectedDivision = 'First Division';

    const actualDivision = getDivision(percentage);

    expect(actualDivision).toBe(expectedDivision);
});

test('80 percentage is not first division', () => {
    const percentage = 80;
    const expectedDivision = 'First Division';

    const actualDivision = getDivision(percentage);

    expect(actualDivision).not.toBe(expectedDivision);
});

test('79.99 percentage is first division', () => {
    const percentage = 79.99;
    const expectedDivision = 'First Division';

    const actualDivision = getDivision(percentage);
    
    expect(actualDivision).toBe(expectedDivision);
});

//Case for second division

test('40 percentage is second division', () => {
    const percentage = 40;
    const expectedDivision = 'Second Division';

    const actualDivision = getDivision(percentage);

    expect(actualDivision).toBe(expectedDivision);
});

test('60 percentage is not second division', () => {
    const percentage = 60;
    const expectedDivision = 'Second Division';

    const actualDivision = getDivision(percentage);

    expect(actualDivision).not.toBe(expectedDivision);
});

//Case for third division

test('30 percentage is third division', () => {
    const percentage = 30;
    const expectedDivision = 'Third Division';

    const actualDivision = getDivision(percentage);

    expect(actualDivision).toBe(expectedDivision);
});

//Case for fail

test('20 percentage is fail', () => {
    const percentage = 20;
    const expectedDivision = 'Fail';

    const actualDivision = getDivision(percentage);
    
    expect(actualDivision).toBe(expectedDivision);
});

test('30 percentage is not fail', () => {
    const percentage = 30;
    const expectedDivision = 'Fail';

    const actualDivision = getDivision(percentage);

    expect(actualDivision).not.toBe(expectedDivision);
});

test('0 percentage is fail', () => {
    const percentage = 0;
    const expectedDivision = 'Fail';

    const actualDivision = getDivision(percentage);

    expect(actualDivision).toBe(expectedDivision);
});
