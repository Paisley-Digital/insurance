import { Component, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAnchor } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ErrorMessageComponent } from '@shared-ui-input-validator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isHandsetScreen } from '@shared-util-common';
import { OverlaySpinnerDirective } from '@insurance-shared-ui-overlay-spinner';
import { AuthService } from '@shared-util-web-sdk';
import { Observable } from 'rxjs';

@Component({
  selector: 'insurance-broker-feature-auth',
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
  templateUrl: './broker-feature-auth.component.html',
  styleUrl: './broker-feature-auth.component.scss',
})
export class BrokerFeatureAuthComponent {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);

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
    if (userName !== 'assigned1' || password !== 'testkyc123') {
      this.loginForm.get('password')?.setErrors({ notValid: true });
      return;
    }
    this.loading.set(true);
    this.router.navigate(['/console']);
  }

  generateOtp() {
    const email = this.loginForm.getRawValue().userName;
    this.authService.generateOtp({ email }).subscribe({
      next: (response) => {
        console.log('OTP sent:', response);
      },
      error: (error) => {
        console.error('Error sending OTP:', error);
      }
    });
  }
}