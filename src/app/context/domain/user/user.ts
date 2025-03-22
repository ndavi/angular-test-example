import { hasValidPassword } from './has-valid-password';

class Username {
  constructor(readonly value: string) {
    if (!hasValidUsername(value)) {
      throw new Error('Username is invalid');
    }
  }
}

class Password {
  constructor(readonly value: string) {
    if (!hasValidPassword(value)) {
      throw new Error('Password is invalid');
    }
  }
}

export class User {
  readonly username: Username;
  readonly password: Password;

  constructor(username: string, password: string) {
    this.username = new Username(username);
    this.password = new Password(password);
  }
}

export const hasValidUsername = (username: string) => username.length > 0;
