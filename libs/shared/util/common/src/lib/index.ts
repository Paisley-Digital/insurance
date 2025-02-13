import { inject } from '@angular/core';
import { map } from 'rxjs';
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
