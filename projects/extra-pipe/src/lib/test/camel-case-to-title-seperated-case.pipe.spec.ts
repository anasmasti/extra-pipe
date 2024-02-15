import { CamelCaseToTitleSeperatedCasePipe } from '../core/pipes/camel-case-to-title-seperated-case.pipe';

describe('CamelCaseToTitleSeperatedCasePipe', () => {
  let pipe: CamelCaseToTitleSeperatedCasePipe;

  beforeEach(() => {
    pipe = new CamelCaseToTitleSeperatedCasePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "camelCaseString" to "camel Case String"', () => {
    const input = 'camelCaseString';
    const transformed = pipe.transform(input);
    expect(transformed).toBe('camel Case String');
  });
});
