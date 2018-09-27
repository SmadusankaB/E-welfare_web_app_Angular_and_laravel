import { AdminSidebarModule } from './admin-sidebar.module';

describe('AdminSidebarModule', () => {
  let adminSidebarModule: AdminSidebarModule;

  beforeEach(() => {
    adminSidebarModule = new AdminSidebarModule();
  });

  it('should create an instance', () => {
    expect(adminSidebarModule).toBeTruthy();
  });
});
