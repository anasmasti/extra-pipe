import { TestBed } from '@angular/core/testing';
import { NumberToLettersPipe } from '../shared/pipes/numbers-to-letters.pipe';


describe('NumberToLettersPipe', () => {
  let pipe: NumberToLettersPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberToLettersPipe],
    });
    pipe = TestBed.inject(NumberToLettersPipe);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform 0 to "Zero"', () => {
    expect(pipe.transform(0)).toBe('Zero');
  });

  it('should transform single-digit numbers correctly', () => {
    expect(pipe.transform(1)).toBe('One');
    expect(pipe.transform(5)).toBe('Five');
    expect(pipe.transform(10)).toBe('Ten');
    // Add more test cases for single-digit numbers
  });

  it('should transform numbers less than 20 correctly', () => {
    expect(pipe.transform(11)).toBe('Eleven');
    expect(pipe.transform(15)).toBe('Fifteen');
    // Add more test cases for numbers less than 20
  });

  it('should transform numbers less than 100 correctly', () => {
    expect(pipe.transform(21)).toBe('Twenty One');
    expect(pipe.transform(45)).toBe('Forty Five');
    // Add more test cases for numbers less than 100
  });

  it('should transform numbers less than 1000 correctly', () => {
    expect(pipe.transform(123)).toBe('One Hundred Twenty Three');
    expect(pipe.transform(999)).toBe('Nine Hundred Ninety Nine');
    // Add more test cases for numbers less than 1000
  });

  it('should handle large numbers and return "Number is too large to convert"', () => {
    expect(pipe.transform(1000000000)).toBe('Number is too large to convert');
    // Add more test cases for large numbers
  });
});
