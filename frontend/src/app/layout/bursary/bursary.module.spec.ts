import { BursaryModule } from './bursary.module';

describe('BursaryModule', () => {
  let bursaryModule: BursaryModule;

  beforeEach(() => {
    bursaryModule = new BursaryModule();
  });

  it('should create an instance', () => {
    expect(bursaryModule).toBeTruthy();
  });
});
