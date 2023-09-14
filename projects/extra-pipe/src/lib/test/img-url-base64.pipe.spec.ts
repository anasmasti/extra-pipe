import { Base64ImgUrlPipe } from '../../public-api';

describe('Base64ImgUrlPipe', () => {
  let pipe: Base64ImgUrlPipe;

  beforeEach(() => {
    pipe = new Base64ImgUrlPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform base64 to a data URL', () => {
    const base64 = 'your-base64-data';
    const mimeType = 'image/png';

    const result = pipe.transform(base64, mimeType);

    expect(result).toBe(`data:${mimeType};base64,${base64}`);
  });
});
