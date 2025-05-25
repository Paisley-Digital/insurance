import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDesktopComponent } from '@shared-ui-header-desktop';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { InsuranceBrokerFeatureSideBarComponent } from './insurance-broker-feature-side-bar.component';
import { RouterOutlet } from '@angular/router';
import { isHandsetScreen } from '@shared-util-common';
import { SideBarComponent } from '../../../../../employee/feature/shell/src/lib/side-bar.component';
import {HeaderComponent} from "@insurance-broker-feature-header";

@Component({
  selector: 'insurance-insurance-broker-feature-shell',
  imports: [
    CommonModule,
    MatSidenavContainer,
    SideBarComponent,
    MatSidenavModule,
    RouterOutlet,
    HeaderDesktopComponent,
    InsuranceBrokerFeatureSideBarComponent,
    HeaderComponent,
  ],
  templateUrl: './insurance-broker-feature-shell.component.html',
  styleUrl: './insurance-broker-feature-shell.component.scss',
})
export class InsuranceBrokerFeatureShellComponent {
  isHandsetScreen$ = isHandsetScreen();
}
