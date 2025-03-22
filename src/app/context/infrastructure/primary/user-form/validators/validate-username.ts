import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { hasValidUsername } from '../../../../domain/user/user';

export const validateUsername =
  (): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    const username = control.value;

    if (!hasValidUsername(username)) {
      return { required: true };
    }

    return null;
  };
