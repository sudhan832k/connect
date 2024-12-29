import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() userName!: string;

  @Output() selectOption: EventEmitter<string> = new EventEmitter<string>();

  onSelect(option: string) {
    this.selectOption.emit(option); // Emit selected option ('friends' or 'about-us')
  }
}
