import { inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

export function isHandsetScreen() {
  return inject(BreakpointObserver)
    .observe(Breakpoints.Handset)
    .pipe(map((value) => value.matches));
}

export function normalizeKeys(obj: any): any {
  return Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key.replace(/\s+/g, '_')]: value,
    }),
    {}
  );
}

export function replaceKeys(obj: any, oldChar: string, newChar: string) {
  return Object.keys(obj).reduce((acc, key) => {
    const newKey = key.replace(new RegExp(oldChar, 'g'), newChar);
    acc[newKey] = obj[key];
    return acc;
  }, {} as any);
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function extractImage(file: File) {
  return new Observable<File>((observer) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (!event.target || !event.target.result) {
        observer.error(new Error('File could not be read.'));
        return;
      }

      const img = new Image();
      img.src = event.target.result as string;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          observer.error(new Error('Canvas context could not be created.'));
          return;
        }

        const maxWidth = 800;
        const maxHeight = 800;
        let width = img.width;
        let height = img.height;

        if (width > height && width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        } else if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              observer.error(new Error('Failed to create Blob.'));
              return;
            }

            const resizedFile = new File([blob], file.name, {
              type: file.type,
            });
            observer.next(resizedFile);
            observer.complete();
          },
          'image/jpeg',
          0.7
        );
      };

      img.onerror = () =>
        observer.error(new Error('Image could not be loaded.'));
    };

    reader.onerror = () => observer.error(new Error('FileReader error.'));
  });
}

export function compressFile(file: File) {
  return new Observable<File>((observer) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = () => {
      if (!reader.result) {
        observer.error(new Error('File could not be read.'));
        return;
      }

      const originalData = new Uint8Array(reader.result as ArrayBuffer);

      let compressedData = '';
      const chunkSize = 1024;
      for (let i = 0; i < originalData.length; i += chunkSize) {
        compressedData += String.fromCharCode.apply(
          null,
          Array.from(originalData.slice(i, i + chunkSize))
        );
      }

      compressedData = btoa(compressedData);

      const compressedBlob = new Blob([compressedData], { type: file.type });
      const compressedFile = new File(
        [compressedBlob],
        `compressed_${file.name}`,
        {
          type: file.type,
        }
      );

      observer.next(compressedFile);
      observer.complete();
    };

    reader.onerror = () => observer.error(new Error('Error reading file.'));
  });
}
