import {Component, inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorMessageComponent} from "@shared-ui-input-validator";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {isHandsetScreen} from "@shared-util-common";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatAnchor, MatButtonModule} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {OverlaySpinnerDirective} from "@insurance-shared-ui-overlay-spinner";

@Component({
  selector: 'insurance-insurance-customer-auth',
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
  ],
  templateUrl: './insurance-customer-auth.component.html',
  styleUrl: './insurance-customer-auth.component.scss',
})
export class InsuranceCustomerAuthComponent {
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
