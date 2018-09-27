import { MahapolaSidebarModule } from './mahapola-sidebar.module';

describe('MahapolaSidebarModule', () => {
  let mahapolaSidebarModule: MahapolaSidebarModule;

  beforeEach(() => {
    mahapolaSidebarModule = new MahapolaSidebarModule();
  });

  it('should create an instance', () => {
    expect(mahapolaSidebarModule).toBeTruthy();
  });
});
