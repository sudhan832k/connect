import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { HeaderComponent } from '../header/header.component';
import { Config } from '../../env';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = Config.app.name;
}
