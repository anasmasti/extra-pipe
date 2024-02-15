import { RemoveDuplicatesByKeyPipe } from '../core/pipes/remove-duplicates-by-key.pipe';

describe('RemoveDuplicatesByKeyPipe', () => {
  let pipe: RemoveDuplicatesByKeyPipe;

  beforeEach(() => {
    pipe = new RemoveDuplicatesByKeyPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty array if input array is empty', () => {
    const arrayData: any[] = [];
    const key = 'name';

    expect(pipe.transform(arrayData, key)).toEqual([]);
  });
});
