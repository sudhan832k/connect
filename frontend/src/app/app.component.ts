import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { config } from '../env';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = config.app.name;
}
