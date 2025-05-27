import { Component, inject, signal } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormField, MatSuffix } from '@angular/material/form-field';
import {
  MatDrawerContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatIconButton,
} from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
import { ErrorMessageComponent } from '@shared-ui-input-validator';
import { Router } from '@angular/router';
import { isHandsetScreen } from '@shared-util-common';
import { OverlaySpinnerDirective } from '@insurance-shared-ui-overlay-spinner';

@Component({
  selector: 'insurance-employee-feature-auth',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatAnchor,
    MatFormField,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ErrorMessageComponent,
    MatCheckboxModule,
    OverlaySpinnerDirective,
    NgOptimizedImage,
  ],
  templateUrl: './employee-feature-auth.component.html',
  styleUrl: './employee-feature-auth.component.scss',
})
export class EmployeeFeatureAuthComponent {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  isHandsetScreen$ = isHandsetScreen();

  showPassword = signal(false);
  loading = signal(false);

  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });

  get errorMessage() {
    if (this.loginForm.get('password')?.hasError('notValid')) {
      return 'The username or password is incorrect.';
    }
    return '';
  }

  isShowPassword() {
    this.showPassword.update((current) => !current);
  }

  navigateToProduct() {
    const userName = this.loginForm.getRawValue().userName;
    const password = this.loginForm.getRawValue().password;
    if (userName !== 'bbgroup' || password !== '123') {
      this.loginForm.get('password')?.setErrors({ notValid: true });
      return;
    }
    this.loading.set(true);
    this.router.navigate(['/console']);
  }
}
