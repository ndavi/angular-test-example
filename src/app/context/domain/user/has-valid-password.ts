export const hasValidPassword = (password: string) => hasPasswordNotEmpty(password) && hasPasswordCorrectContent(password);

export const hasPasswordNotEmpty = (password: string) => password.length > 0;

const MUST_HAVE_CHARACTERS = ['@', '_'];
export const hasPasswordCorrectContent = (password: string) =>
  password.length > 8 && MUST_HAVE_CHARACTERS.every(char => password.includes(char));
