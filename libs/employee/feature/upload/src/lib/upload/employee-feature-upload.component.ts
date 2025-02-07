import { Component, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AlertService } from '@shared-ui-alert';

@Component({
  selector: 'insurance-employee-feature-upload',
  imports: [
    CommonModule,
    MatButton,
    MatIcon,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    NgOptimizedImage,
  ],
  templateUrl: './employee-feature-upload.component.html',
  styleUrl: './employee-feature-upload.component.scss',
})
export class EmployeeFeatureUploadComponent {
  private alert = inject(AlertService);

  filePreview: string | ArrayBuffer | null = null;
  passportFilePreview: string | ArrayBuffer | null = null;
  filePreviewEmiratesId: string | ArrayBuffer | null = null;

  isImage: boolean = false;

  fileSize = signal('');
  fileSizePassport = signal('');
  fileSizeId = signal('');
  file = signal<File | null>(null);
  filePassport = signal<File | null>(null);
  fileEmiratesId = signal<File | null>(null);

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files) {
      return;
    }

    const file = input.files[0];
    if (!file) {
      console.warn('No file selected.');
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      this.alert.open('File size exceeds 2MB!');
      return;
    }
    this.file.set(file);

    const fileType = file.type;
    this.isImage = fileType.startsWith('image/');
    this.fileSize.set(this.formatFileSize(file.size));

    const reader = new FileReader();
    reader.onload = () => {
      this.filePreview = reader.result;
    };

    if (this.isImage) {
      reader.readAsDataURL(file);
    } else {
      this.filePreview = null;
    }
  }

  formatFileSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }

  onFileSelectedPassport(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files) {
      return;
    }

    const file = input.files[0];
    if (!file) {
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      this.alert.open('File size exceeds 2MB!');
      return;
    }
    this.filePassport.set(file);

    const fileType = file.type;
    this.isImage = fileType.startsWith('image/');
    this.fileSizePassport.set(this.formatFileSize(file.size));

    const reader = new FileReader();
    reader.onload = () => {
      this.passportFilePreview = reader.result;
    };

    if (this.isImage) {
      reader.readAsDataURL(file);
    } else {
      this.passportFilePreview = null;
    }
  }

  onFileSelectedId(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files) {
      return;
    }

    const file = input.files[0];
    if (!file) {
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      this.alert.open('File size exceeds 2MB!');
      return;
    }
    this.fileEmiratesId.set(file);

    const fileType = file.type;
    this.isImage = fileType.startsWith('image/');
    this.fileSizeId.set(this.formatFileSize(file.size));

    const reader = new FileReader();
    reader.onload = () => {
      this.filePreviewEmiratesId = reader.result;
    };

    if (this.isImage) {
      reader.readAsDataURL(file);
    } else {
      this.filePreviewEmiratesId = null;
    }
  }

  removeFile() {
    this.filePreview = null;
    this.file.set(null);
  }

  removeFilePassport() {
    this.passportFilePreview = null;
    this.filePassport.set(null);
  }

  removeFileId() {
    this.filePreviewEmiratesId = null;
    this.fileEmiratesId.set(null);
  }
}
