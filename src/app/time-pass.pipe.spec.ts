import { TimePassPipe } from './time-pass.pipe';

describe('TimePassPipe', () => {
  it('create an instance', () => {
    const pipe = new TimePassPipe();
    expect(pipe).toBeTruthy();
  });
});
