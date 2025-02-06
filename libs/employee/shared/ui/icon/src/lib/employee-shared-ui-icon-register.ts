import { inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformServer } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { svgIconNames as clientBridgeSvgIconNames } from './constants';

export function employeeSharedUiIconRegister(): void {
  const platformId = inject(PLATFORM_ID);
  const document = inject(DOCUMENT);
  const matIconRegistry = inject(MatIconRegistry);
  const domSanitizer = inject(DomSanitizer);

  const names = Array.from(new Set([...clientBridgeSvgIconNames]));
  const baseHref = isPlatformServer(platformId)
    ? document.location.origin
    : '.';

  names.forEach((name) => {
    matIconRegistry.addSvgIcon(
      name,
      domSanitizer.bypassSecurityTrustResourceUrl(
        `${baseHref}/assets/icons/${name}.svg`
      )
    );
  });
}
