import { FormatInstanceofDatePipe } from '../core/pipes/format-instanceof-date.pipe';

describe('FormatInstanceofDatePipe', () => {
  let pipe: FormatInstanceofDatePipe;

  beforeEach(() => {
    pipe = new FormatInstanceofDatePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
