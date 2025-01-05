import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FriendsComponent } from '../friends/friends.component';
import { UsersComponent } from '../users/users.component';
import { CommonModule } from '@angular/common';
import { AuthorizedService } from '../service/authorized.service';
import { ChatboxComponent } from '../chatbox/chatbox.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
    FriendsComponent,
    UsersComponent,
    CommonModule,
    ChatboxComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  loggedInUserName: string = '';
  selectedEvent: string = '';
  receiverDetails: any = {};

  constructor(private authService: AuthorizedService) {
    this.getLoggedinUserProfile();
  }

  onSelect(option: string) {
    this.selectedEvent = option;
  }

  getLoggedinUserProfile() {
    const result = this.authService.getUserProfile();
    result.subscribe((res) => {
      this.loggedInUserName = res.result.name;
    });
  }

  setReceiverDetails(rec: any) {
    this.receiverDetails = { userId: rec._id, userName: rec.name };
    this.selectedEvent = 'chatbox';
  }
}
