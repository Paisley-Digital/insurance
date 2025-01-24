import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatIconButton } from '@angular/material/button';

@Component({
  selector: 'lib-header-desktop',
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header-desktop.component.html',
  styleUrl: './header-desktop.component.scss',
})
export class HeaderDesktopComponent {}
