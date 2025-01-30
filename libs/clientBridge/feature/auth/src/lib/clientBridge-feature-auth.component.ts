import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { isHandsetScreen } from '@insurance-shared-util-common';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ErrorMessageComponent } from '@insurance-shared-ui-input-validation-message';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';
@Component({
  selector: 'insurance-client-bridge-feature-auth',
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
  ],
  templateUrl: './clientBridge-feature-auth.component.html',
  styleUrl: './clientBridge-feature-auth.component.scss',
})
export class ClientBridgeFeatureAuthComponent {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  isHandsetScreen$ = isHandsetScreen();

  showPassword = signal(false);

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
    this.router.navigate(['/console']);
  }
}
