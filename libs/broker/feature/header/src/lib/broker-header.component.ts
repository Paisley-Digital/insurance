import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'broker-header',
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './broker-header.component.html',
  styleUrls: ['./broker-header.component.scss'],
})
export class BrokerHeaderComponent {
  @Input({ required: true }) title!: string;
}
