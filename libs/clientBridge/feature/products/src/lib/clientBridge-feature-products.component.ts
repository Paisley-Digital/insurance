import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCalendarHeader } from '@angular/material/datepicker';
import { MatCard, MatCardContent } from '@angular/material/card';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessageComponent } from '@insurance-shared-ui-input-validation-message';
import {
  MatError,
  MatFormField,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ClientBridgeFeatureProductsUploadFileComponent } from './clientBridge-feature-products-upload-file.component';
import { isHandsetScreen } from '@insurance-shared-util-common';

@Component({
  selector: 'insurance-client-bridge-feature-products',
  imports: [
    CommonModule,
    MatCard,
    MatCardContent,
    ReactiveFormsModule,
    ErrorMessageComponent,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    MatIcon,
    MatIconButton,
    MatSuffix,
    MatButton,
    MatDatepickerModule,
    ClientBridgeFeatureProductsUploadFileComponent,
  ],
  templateUrl: './clientBridge-feature-products.component.html',
  styleUrl: './clientBridge-feature-products.component.scss',
})
export class ClientBridgeFeatureProductsComponent {
  private formBuilder = inject(FormBuilder);

  today = new Date();
  uploadForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    nationalCode: ['', [Validators.required]],
    number: ['', [Validators.required]],
    file: [null as File | null, Validators.required],
  });

  protected readonly MAX_FILE_SIZE = 50;
  readonly MEGA_BYTE = 1048576; //1024*1024 Byte
  readonly KILO_BYTE = 1024;
  readonly MAX_FILE_SIZE_IN_MEGA_BYTE = this.MAX_FILE_SIZE * this.MEGA_BYTE;

  isHandsetScreen$ = isHandsetScreen();

  selectedFileSize = signal<string>('');
  file = signal<File | null>(null);

  handleFileChange(event: Event) {
    this.uploadForm
      .get('file')
      ?.setErrors({ invalidFileSize: null, invalidFileType: null });
    this.uploadForm.get('file')?.updateValueAndValidity();

    if (
      !(event.target instanceof HTMLInputElement) ||
      !event.target.files?.length
    ) {
      return;
    }

    const file = event.target.files[0];
    this.uploadForm.patchValue({ file });

    this.file.set(file);
    this.selectedFileSize.set(this.getSelectedFileSize(file.size));

    const xlsType = 'application/vnd.ms-excel';
    const xlsxType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

    if (file.size > this.MAX_FILE_SIZE_IN_MEGA_BYTE) {
      this.uploadForm.get('file')?.setErrors({ invalidFileSize: true });
    } else if (
      file.type !== 'text/plain' &&
      file.type !== xlsxType &&
      file.type !== xlsType
    ) {
      this.uploadForm.get('file')?.setErrors({ invalidFileType: true });
    }
  }

  private getSelectedFileSize(fileSize: number) {
    if (!fileSize) {
      return '';
    }
    if (fileSize > this.MEGA_BYTE) {
      return Math.round((fileSize / this.MEGA_BYTE) * 100) / 100 + 'MB';
    } else if (fileSize > this.KILO_BYTE) {
      return Math.round((fileSize / this.KILO_BYTE) * 100) / 100 + 'KB';
    }
    return Math.round(fileSize) + 'B';
  }
}
