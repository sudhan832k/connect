import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FriendsComponent } from '../friends/friends.component';
import { UsersComponent } from '../users/users.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
    FriendsComponent,
    UsersComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  loggedInUserName: string = 'Selvasudhan';
  selectedEvent: string = '';

  onSelect(option: string) {
    this.selectedEvent = option;
  }
}
