import { Component } from '@angular/core';
import { AuthorizedService } from '../service/authorized.service';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [],
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.scss',
})
export class FriendsComponent {
  constructor(private authService: AuthorizedService) {
    this.getAllFriends();
  }
  getAllFriends() {
    const res = this.authService.getAllFriends();
    res.subscribe((res) => {
      console.log(res);
    });
  }
}
