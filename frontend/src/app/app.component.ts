import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Config } from '../../env';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticateService } from '../service/authenticate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HttpClientModule],
  providers: [AuthenticateService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = Config.app.name;
}
