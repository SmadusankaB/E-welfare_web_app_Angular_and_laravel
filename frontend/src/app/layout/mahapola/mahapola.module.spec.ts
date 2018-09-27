import { MahapolaModule } from './mahapola.module';

describe('MahapolaModule', () => {
  let mahapolaModule: MahapolaModule;

  beforeEach(() => {
    mahapolaModule = new MahapolaModule();
  });

  it('should create an instance', () => {
    expect(mahapolaModule).toBeTruthy();
  });
});
