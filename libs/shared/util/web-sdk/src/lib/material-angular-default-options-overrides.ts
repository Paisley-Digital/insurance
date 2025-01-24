import { Provider } from '@angular/core';
import { MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS } from '@angular/material/progress-spinner';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

export const MAT_DEFAULT_OPTIONS_OVERRIDES: Provider[] = [
  {
    provide: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
    useValue: {
      diameter: 25,
    },
  },
  {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
      appearance: 'outline',
      hideRequiredMarker: true,
    },
  },
  {
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: {
      duration: 5_000,
      verticalPosition: 'top',
    },
  },
];
