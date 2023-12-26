const Person = require('./05-person');

describe('Persona', () => {
  let person;
  beforeEach(() => {
    person = new Person('Caleb', 45, 1.74);
  });

  it('should return down', () => {
    expect(person.calcIMC()).toBe('down');
  });
  it('should return normal', () => {
    person.weight = 74;
    expect(person.calcIMC()).toBe('normal');
  });
  it('should return overweight', () => {
    person.weight = 80;
    expect(person.calcIMC()).toBe('overweight');
  });
  it('should return overweight level 1', () => {
    person.weight = 82;
    expect(person.calcIMC()).toBe('overweight level 1');
  });
  it('should return overweight level 2', () => {
    person.weight = 90;
    expect(person.calcIMC()).toBe('overweight level 2');
  });
  it('should return overweight level 3', () => {
    person.weight = 130;
    expect(person.calcIMC()).toBe('overweight level 3');
  });
});
