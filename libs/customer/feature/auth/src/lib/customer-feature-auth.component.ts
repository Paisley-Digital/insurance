import {Component, inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorMessageComponent} from "@insurance-shared-ui-input-validation-message";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatError, MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {isHandsetScreen} from "@insurance-shared-util-common";

@Component({
  selector: 'insurance-customer-feature-auth',
  imports: [CommonModule,
    ErrorMessageComponent,
    MatAnchor,
    MatButton,
    MatCheckbox,
    MatDrawerContainer,
    MatDrawerContent,
    MatError,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
  ],
  templateUrl: './customer-feature-auth.component.html',
  styleUrl: './customer-feature-auth.component.scss',
})
export class CustomerFeatureAuthComponent {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  isHandsetScreen$ = isHandsetScreen();

  showPassword = signal(false);

  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });

  isShowPassword() {
    this.showPassword.update((current) => !current);
  }

  navigateToProduct() {
    if (this.loginForm.invalid) {
      return;
    }
    this.router.navigate(['/console']);
  }
}
