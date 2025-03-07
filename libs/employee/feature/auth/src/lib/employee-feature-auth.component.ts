import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ErrorMessageComponent } from '@shared-ui-input-validator';
import { Router } from '@angular/router';
import { isHandsetScreen } from '@shared-util-common';
import { OverlaySpinnerDirective } from '@insurance-shared-ui-overlay-spinner';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { SettingService, theme } from '@insurance-shared-data-setting';

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
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
  ],
  templateUrl: './employee-feature-auth.component.html',
  styleUrl: './employee-feature-auth.component.scss',
})
export class EmployeeFeatureAuthComponent {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private service = inject(SettingService);

  protected readonly theme = theme;

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

  setTheme(id: string) {
    this.service.setTheme(id);
  }
}
