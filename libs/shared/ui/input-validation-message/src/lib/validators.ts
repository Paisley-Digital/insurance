import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static getErrorMessage(
    control: AbstractControl | null,
    localeId: string,
    additionalCaseFn?: (error: string) => string | null
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  ): any {
    for (const error in control?.errors) {
      if (
        additionalCaseFn &&
        typeof additionalCaseFn === 'function' &&
        additionalCaseFn(error)
      ) {
        return additionalCaseFn(error);
      }
      switch (error) {
        case 'required':
          return 'You must fill this field.';
        case 'email':
          return 'This email is not valid.';
        case 'noWhitespace':
          return 'You must fill this field.';
        case 'exactLength':
          return control?.errors?.['exactLength'].type === 'number'
            ? `Enter ${control?.errors?.['exactLength'].requiredLength} digits.`
            : `Enter ${control?.errors?.['exactLength'].requiredLength} characters`;
        case 'maxlength':
          return `Enter a maximum of ${control?.errors?.['maxlength'].requiredLength} characters.`;
        case 'minlength':
          return `Enter a minimum of ${control?.errors?.['minLength'].requiredLength} characters.`;
        case 'nationalCode':
          return 'The national code is invalid.';
        default:
          return 'Please enter a valid value.';
      }
    }
  }
}
