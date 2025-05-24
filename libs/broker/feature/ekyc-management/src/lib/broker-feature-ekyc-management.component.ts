import { Component, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { AlertService } from '@shared-ui-alert';
import { ErrorMessageComponent } from '@shared-ui-input-validator';
import { MatSelectModule } from '@angular/material/select';
import { country } from './ekyc-management.constant';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'insurance-broker-feature-ekyc-management',
  imports: [
    CommonModule,
    MatCard,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    MatSelectModule,
    NgOptimizedImage,
    ErrorMessageComponent,
    MatDatepickerModule,
  ],
  templateUrl: './broker-feature-ekyc-management.component.html',
  styleUrl: './broker-feature-ekyc-management.component.scss',
})
export class BrokerFeatureEkycManagementComponent {
  private _formBuilder = inject(FormBuilder);
  private alert = inject(AlertService);

  readonly maxCharLength = 120;

  filePreview: string | ArrayBuffer | null = null;
  passportFilePreview: string | ArrayBuffer | null = null;
  visaFilePreview: string | ArrayBuffer | null = null;
  filePreviewEmiratesId: string | ArrayBuffer | null = null;
  file = signal<File | null>(null);
  fileSize = signal('');

  companyInfoForm = this._formBuilder.group({
    fullLegalName: ['', Validators.required],
    fullTradingName: ['', Validators.required],
    typeOfCompany: ['', Validators.required],
    licenseNumber: ['', Validators.required],
    registeredAddress: [
      '',
      [Validators.required, Validators.maxLength(this.maxCharLength)],
    ],
    businessAddress: ['', Validators.required],
    country: ['', Validators.required],
    tradeLicenseNumber: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: [
      '',
      [Validators.required, Validators.maxLength(this.maxCharLength)],
    ],
  });

  get getCharacter() {
    return `(Allowed characters: ${
      this.companyInfoForm.value.registeredAddress!.length || 0
    } - ${this.maxCharLength})`;
  }

  get getCharacterBusinessAddress() {
    return `(Allowed characters: ${
      this.companyInfoForm.value.businessAddress!.length || 0
    } - ${this.maxCharLength})`;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      this.file.set(file);
      this.fileSize.set(this.formatFileSize(file.size));
      this.updateFilePreview(file, 'residency');
    } else {
      this.alert.open('File size exceeds 2MB!');
    }
  }

  removeFile() {
    this.filePreview = null;
    this.file.set(null);
  }

  updateFilePreview(file: File, type: string) {
    const reader = new FileReader();
    reader.onload = () => {
      if (type === 'residency') {
        this.filePreview = reader.result;
      } else if (type === 'passport') {
        this.passportFilePreview = reader.result;
      } else if (type === 'emiratesId') {
        this.filePreviewEmiratesId = reader.result;
      }
    };
    reader.readAsDataURL(file);
  }

  private formatFileSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }

  protected readonly country = country;
}
