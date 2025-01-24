import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderDesktopComponent} from "@insurance-shared-ui-header-desktop";
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {SideBarComponent} from "../../../../../clientBridge/feature/shell/src/lib/side-bar.component";
import {RouterOutlet} from "@angular/router";
import {isHandsetScreen} from "@insurance-shared-util-common";

@Component({
  selector: 'insurance-customer-feature-shell',
  imports: [
    CommonModule,
    MatSidenavContainer,
    SideBarComponent,
    MatSidenavModule,
    RouterOutlet,
    HeaderDesktopComponent,
  ],
  templateUrl: './customer-feature-shell.component.html',
  styleUrl: './customer-feature-shell.component.scss',
})
export class CustomerFeatureShellComponent {
  isHandsetScreen$ = isHandsetScreen()
}
