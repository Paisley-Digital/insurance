import { Component, inject, signal } from '@angular/core';
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
  filePreview: string | ArrayBuffer | null = null;
  passportFilePreview: string | ArrayBuffer | null = null;
  filePreviewEmiratesId: string | ArrayBuffer | null = null;
  isImage: boolean = false;
  fileType: 'image' | 'video' = 'image';
  fileSize = signal('');
  fileSizePassport = signal('');
  fileSizeId = signal('');

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
      alert('File size exceeds 2MB!');
      return;
    }

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
      return;
    }

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
      alert('File size exceeds 2MB!');
      return;
    }

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
  }

  removeFilePassport() {
    this.passportFilePreview = null;
  }

  removeFileId() {
    this.filePreviewEmiratesId = null;
  }
}
