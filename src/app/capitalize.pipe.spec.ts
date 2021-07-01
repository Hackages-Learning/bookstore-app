import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('should capitalize when transforming', () => {
    const pipe = new CapitalizePipe();
    expect(pipe.transform('value')).toBe('Value');
  })

  it('should trim when transforming', () => {
    const pipe = new CapitalizePipe();
    expect(pipe.transform(' Value ')).toBe('Value');
  })
});
