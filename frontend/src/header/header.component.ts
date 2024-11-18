import { Component } from '@angular/core';
import { Config } from '../../env';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  applicationName: String = Config.app.name;
}
