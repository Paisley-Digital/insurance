import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {
  MatDrawerContainer,
  MatDrawerContent,
} from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { isHandsetScreen } from '@shared-util-common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'lib-upload',
  imports: [
    CommonModule,
    MatButton,
    MatDrawerContainer,
    MatDrawerContent,
    MatIcon,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './employee-feature-upload.component.html',
  styleUrl: './employee-feature-upload.component.scss',
})
export class EmployeeFeatureUploadComponent {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  isHandsetScreen$ = isHandsetScreen();

  uploadFile() {
    return alert('hesaamm is ');
  }
}
