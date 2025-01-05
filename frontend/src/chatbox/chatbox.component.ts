import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AuthorizedService } from '../service/authorized.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.scss',
})
export class ChatboxComponent {
  @Input() receiver!: any;
  public messageList: any;
  public message: string = '';
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

  onClickOnSend() {
    const response = this.auth.postMessage({
      receiverId: this.receiver.userId,
      message: this.message,
    });
    response.subscribe((res) => {
      this.messageList = res.result;
      this.getMessages();
      this.message = '';
    });
  }
}
