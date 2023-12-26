// matchers: https://jestjs.io/docs/en/using-matchers

describe('Assertions', () => {
  test('test object equality', () => {
    const obj = { name: 'Caleb' };
    obj.lastName = 'Castro';
    expect(obj).toEqual({ name: 'Caleb', lastName: 'Castro' });
  });

  test('test nulls', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    // expect(n).toBeTruthy();
  });

  test('test booleans', () => {
    const t = true;
    const f = false;
    expect(t).toBeTruthy();
    expect(f).toBeFalsy();
    expect(0).toBeFalsy();
    expect('').toBeFalsy();
  });
  test('test string', () => {
    expect('Caleb').toMatch(/Caleb/);
  });

  test('test list / arrays', () => {
    const numbers = [1, 2, 3, 4];
    expect(numbers).toContain(3);
  });
});
