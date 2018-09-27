import { ProfileEditModule } from './profile-edit.module';

describe('ProfileEditModule', () => {
  let profileEditModule: ProfileEditModule;

  beforeEach(() => {
    profileEditModule = new ProfileEditModule();
  });

  it('should create an instance', () => {
    expect(profileEditModule).toBeTruthy();
  });
});
