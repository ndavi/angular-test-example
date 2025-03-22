import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { hasPasswordNotEmpty, hasValidPassword } from '../../../../domain/user/has-valid-password';

export const validatePassword =
  (): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;

    if (!hasPasswordNotEmpty(password)) {
      return { required: true };
    }

    if (!hasValidPassword(password)) {
      return { invalidPassword: true };
    }

    return null;
  };
