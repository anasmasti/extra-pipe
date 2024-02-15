import { LocalizedPipe } from '../../public-api';

describe('LocalizedPipe', () => {
  let pipe: LocalizedPipe;

  beforeEach(() => {
    pipe = new LocalizedPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
