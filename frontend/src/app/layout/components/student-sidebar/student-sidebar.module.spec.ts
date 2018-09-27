import { StudentSidebarModule } from './student-sidebar.module';

describe('StudentSidebarModule', () => {
  let studentSidebarModule: StudentSidebarModule;

  beforeEach(() => {
    studentSidebarModule = new StudentSidebarModule();
  });

  it('should create an instance', () => {
    expect(studentSidebarModule).toBeTruthy();
  });
});
