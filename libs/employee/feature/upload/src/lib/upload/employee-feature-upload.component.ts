import { Component, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AlertService } from '@shared-ui-alert';
import { UploadImage } from '@insurance-employee-data-dashboards';
import { forkJoin } from 'rxjs';
import { FileUploadService } from '../../../../../data/data-dashboards/src/lib/employee.data.service';

@Component({
  selector: 'insurance-employee-feature-upload',
  standalone: true,
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
  styleUrls: ['./employee-feature-upload.component.scss'],
})
export class EmployeeFeatureUploadComponent {
  private alert = inject(AlertService);
  private service = inject(FileUploadService);

  filePreview: string | ArrayBuffer | null = null;
  passportFilePreview: string | ArrayBuffer | null = null;
  filePreviewEmiratesId: string | ArrayBuffer | null = null;
  selectedFiles: UploadImage[] = [];

  fileSize = signal('');
  fileSizePassport = signal('');
  fileSizeId = signal('');
  file = signal<File | null>(null);
  filePassport = signal<File | null>(null);
  fileEmiratesId = signal<File | null>(null);

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      this.file.set(file);
      this.selectedFiles.push({ source: file });
      this.updateFilePreview(file, 'residency');
    } else {
      this.alert.open('File size exceeds 2MB!');
    }
  }

  onFileSelectedPassport(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      this.filePassport.set(file);
      this.selectedFiles.push({ source: file });
      this.updateFilePreview(file, 'passport');
    } else {
      this.alert.open('File size exceeds 2MB!');
    }
  }

  onFileSelectedId(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      this.fileEmiratesId.set(file);
      this.selectedFiles.push({ source: file });
      this.updateFilePreview(file, 'emiratesId');
    } else {
      this.alert.open('File size exceeds 2MB!');
    }
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

  uploadFiles() {
    if (!this.selectedFiles.length) {
      console.warn('No file selected!');
      return;
    }

    const uploadObservables = this.selectedFiles.map((fileData) =>
      this.service.uploadFile(fileData.source)
    );
    forkJoin(uploadObservables).subscribe({
      next: (responses) => {
        console.log('All files uploaded:', responses);

        const uploadedFileUrls = responses.map((res: any) => {
          return `https://insurancebase.paisley.monster${res[0].downloadUrl}`;
        });

        console.log('Uploaded file URLs:', uploadedFileUrls);

        this.callAiService(uploadedFileUrls);
      },
      error: (err) => {
        console.error('Error uploading files:', err);
      }
    });
  }

  callAiService(uploadedFileUrls: string[]) {
    if (!uploadedFileUrls.length) {
      console.error('No files uploaded successfully to call AI service.');
      return;
    }

    const payload: any = {
      contents: [
        {
          extraction_type: 'BASIC_INFO',
          image_urls: uploadedFileUrls,
        },
      ],
    };

    console.log('AI Payload:', payload);
    this.service.postAiService(payload).subscribe({
      next: (aiResponse) => {
        console.log('AI Service response:', aiResponse);
      },
      error: (err) => {
        console.error('Error calling AI service:', err);
      },
    });
  }

}
