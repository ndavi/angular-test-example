import { User } from './user';

const userFixture = (username?: string, password?: string) => new User(username ?? '', password ?? '');
const userFixtureWithPassword = (password?: string) => new User('validUsername', password ?? '');

describe('User', () => {
  it('should build with correct username and password', () => {
    expect(() => userFixture('username', 'CorrectP@ssword_')).not.throws();
  });

  it('should not build user with empty username', () => {
    expect(() => userFixture('', 'password')).throws('Username is invalid');
  });

  it('should not build user with empty password', () => {
    expect(() => userFixture('username', '')).throws('Password is invalid');
  });

  it('should not build user with invalid password', () => {
    expect(() => userFixtureWithPassword('abc')).throws('Password is invalid');
  });

  it("should not build user if password doesn't contains @", () => {
    expect(() => userFixtureWithPassword('passwordWithNoArobase')).throws('Password is invalid');
  });

  it("should not build user if password doesn't contains _", () => {
    expect(() => userFixtureWithPassword('passwordWithNo@Underscore')).throws('Password is invalid');
  });
});
