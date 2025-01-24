import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'insurance-client-bridge-feature-products-upload-file',
  imports: [CommonModule, MatIcon, NgOptimizedImage, MatRipple, MatButton],
  templateUrl: './clientBridge-feature-products-upload-file.component.html',
  styleUrl: './clientBridge-feature-products-upload-file.component.scss',
})
export class ClientBridgeFeatureProductsUploadFileComponent implements OnInit {

  @Input() mediaFile?: File | null;
  @Input() fileType: 'image' | 'video' = 'image';
  @Output() fileUploaded = new EventEmitter<File | null>();

  private readonly MAX_IMAGE_FILE_LENGTH = 1000 * 1024;
  private readonly MAX_VIDEO_FILE_LENGTH = 1000 * 1024 * 5;

  filePreview: string | ArrayBuffer | null = null;
  file: File | null = null;

  ngOnInit() {
    if (this.mediaFile) {
      this.createPreviewFile(this.mediaFile);
    }
  }
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];

      this.createPreviewFile(this.file);

      this.uploadFile(this.file);
    }
  }

  uploadFile(file: File) {
    this.fileUploaded.emit(file);
  }

  removeFile() {
    this.filePreview = null;
    this.file = null;
    this.fileUploaded.emit(null);
  }

  private createPreviewFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.filePreview = reader.result as string | ArrayBuffer;
    };
    reader.readAsDataURL(file);
  }
}
