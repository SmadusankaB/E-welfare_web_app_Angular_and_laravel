import { LandingBackgroundModule } from './landing-background.module';

describe('LandingBackgroundModule', () => {
  let landingBackgroundModule: LandingBackgroundModule;

  beforeEach(() => {
    landingBackgroundModule = new LandingBackgroundModule();
  });

  it('should create an instance', () => {
    expect(landingBackgroundModule).toBeTruthy();
  });
});
