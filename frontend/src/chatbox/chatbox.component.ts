import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AuthorizedService } from '../service/authorized.service';

@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.scss',
})
export class ChatboxComponent {
  @Input() receiver!: any;
  public messageList: any;
  constructor(private auth: AuthorizedService) {}
  ngOnInit() {
    console.log('ngOnInit called', this.receiver);
    this.getMessages();
  }
  getMessages() {
    const response = this.auth.getMessagesByReceiverId({
      receiverId: this.receiver.userId,
    });
    response.subscribe((res) => {
      this.messageList = res.result;
    });
  }
}
