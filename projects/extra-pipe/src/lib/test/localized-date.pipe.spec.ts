import { LocalizedPipe } from '../../public-api';

describe('LocalizedPipe', () => {
  let pipe: LocalizedPipe;

  beforeEach(() => {
    pipe = new LocalizedPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should handle invalid input gracefully', () => {
    const inputDate = 'invalidDate';
    const expectedResult = '';

    const result = pipe.transform(inputDate);

    expect(result).toEqual(expectedResult);
  });
});
