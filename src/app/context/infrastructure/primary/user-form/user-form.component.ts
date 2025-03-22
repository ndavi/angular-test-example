import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserForm } from './user-form';
import { validatePassword } from './validators/validate-password';
import { validateUsername } from './validators/validate-username';

export type UserFormModel = {
  [K in keyof UserForm]: FormControl<UserForm[K]>;
};

@Component({
  selector: 'app-form',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  loginForm: FormGroup<UserFormModel>;

  constructor(private fb: NonNullableFormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [validateUsername()]],
      password: ['', [validatePassword()]],
    });
  }

  onSubmit() {
    this.markFormGroupTouched(this.loginForm);
    if (this.loginForm.invalid) return;

    console.log('Formulaire soumis:', this.loginForm.value);
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
