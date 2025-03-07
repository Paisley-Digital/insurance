import { effect, Injectable, signal } from '@angular/core';
import { Theme } from './setting.model';
import { theme } from './setting.constant';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  private readonly STORAGE_KEY = 'selectedTheme';

  currentTheme = signal<Theme>(this.getStoredTheme() || theme[0]);

  constructor() {
    effect(() => {
      const currTheme = this.currentTheme();
      document.body.classList.remove(...theme.map((theme) => theme.id));
      document.body.classList.add(currTheme.id);
    });
  }

  getThemes() {
    return theme;
  }

  setTheme(themeId: string) {
    const selectedTheme = theme.find((theme) => theme.id === themeId);
    if (selectedTheme) {
      this.currentTheme.set(selectedTheme);
      localStorage.setItem(this.STORAGE_KEY, themeId);
    }
  }

  private getStoredTheme(): Theme | null {
    const storedThemeId = localStorage.getItem(this.STORAGE_KEY);
    return theme.find((t) => t.id === storedThemeId) || null;
  }
}
