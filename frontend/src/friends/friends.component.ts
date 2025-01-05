import { Component, ViewEncapsulation } from '@angular/core';
import { AuthorizedService } from '../service/authorized.service';
import { CommonModule } from '@angular/common';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.scss',
  encapsulation: ViewEncapsulation.None, // Disables View Encapsulation
})
export class FriendsComponent {
  public friendsList: any[] = [];
  constructor(private authService: AuthorizedService) {
    this.getAllFriends();
  }
  getAllFriends() {
    const res = this.authService.getAllFriends();
    res.subscribe((res) => {
      this.friendsList = res.result;
    });
  }
  @Output() messageReceiver: EventEmitter<string> = new EventEmitter<string>();
  onMessageClick(receiverDetails: any) {
    this.messageReceiver.emit(receiverDetails);
  }
}
