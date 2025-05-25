import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDesktopComponent } from '@shared-ui-header-desktop';
import {
  MatSidenavContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import {InsuranceFeatureCustomerSideBarComponent} from "./insurance-feature-customer-side-bar.component";
import {isHandsetScreen} from "@shared-util-common";

@Component({
  selector: 'insurance-insurance-feature-customer-shell',
  imports: [
    CommonModule,
    MatSidenavContainer,
    MatSidenavModule,
    RouterOutlet,
    HeaderDesktopComponent,
    InsuranceFeatureCustomerSideBarComponent,
  ],
  templateUrl: './insurance-feature-customer-shell.component.html',
  styleUrl: './insurance-feature-customer-shell.component.scss',
})
export class InsuranceFeatureCustomerShellComponent {
  isHandsetScreen$ = isHandsetScreen();

}
