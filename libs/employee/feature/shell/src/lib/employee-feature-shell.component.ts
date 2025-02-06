import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { SideBarComponent } from './side-bar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderDesktopComponent } from '@shared-ui-header-desktop';
import { isHandsetScreen } from '@shared-util-common';

@Component({
  selector: 'insurance-employee-feature-shell',
  imports: [
    CommonModule,
    MatSidenavContainer,
    SideBarComponent,
    MatSidenavModule,
    RouterOutlet,
    HeaderDesktopComponent,
  ],
  templateUrl: './employee-feature-shell.component.html',
  styleUrl: './employee-feature-shell.component.scss',
})
export class EmployeeFeatureShellComponent {
  isHandsetScreen$ = isHandsetScreen();
}
