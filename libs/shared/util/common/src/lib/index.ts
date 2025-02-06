import {inject} from "@angular/core";
import {map} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

export function isHandsetScreen() {
  return inject(BreakpointObserver)
    .observe(Breakpoints.Handset)
    .pipe(map(value => value.matches));
}
