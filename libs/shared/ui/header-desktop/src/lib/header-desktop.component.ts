import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SettingService, theme } from '@insurance-shared-data-setting';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'insurance-header-desktop',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
  ],
  templateUrl: './header-desktop.component.html',
  styleUrl: './header-desktop.component.scss',
})
export class HeaderDesktopComponent {
  private service = inject(SettingService);
  protected readonly theme = theme;

  setTheme(id: string) {
    this.service.setTheme(id);
  }
}
