import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
} from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'insurance-insurance-feature-customer-group-management-detail',
  imports: [
    CommonModule,
    MatDialogModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatButton,
    MatIcon,
    MatCardModule,
    MatButtonModule,
    MatCheckbox,
  ],
  templateUrl:
    './insurance-feature-customer-group-management-detail.component.html',
  styleUrl:
    './insurance-feature-customer-group-management-detail.component.scss',
})
export class InsuranceFeatureCustomerGroupManagementDetailComponent {
  readonly dialog = inject(MatDialog);

  @ViewChild('openDialogCrossDialog')
  openDialogCrossDialog!: TemplateRef<unknown>;
  uploadedFiles: { name: string; url: string; type: string }[] = [];

  onFilesSelected(event: any) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        const fileUrl = URL.createObjectURL(file);
        this.uploadedFiles.push({
          name: file.name,
          url: fileUrl,
          type: file.type,
        });
      } else {
        alert('فقط فایل‌های تصویری مجاز هستند!');
      }
    }
    event.target.value = '';
  }

  openDialog() {
    this.dialog.open(this.openDialogCrossDialog);
  }
}
