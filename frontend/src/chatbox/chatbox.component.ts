import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.scss',
})
export class ChatboxComponent {
  @Input() receiver!: any;
  public messageList = [
    {
      message: 'Hello',
      sentBy: 'Selvasudhan',
    },
    { message: 'heyyy', sentBy: 'Ramya' },
  ];
  constructor() {}
  ngOnInit() {
    console.log('ngOnInit called', this.receiver);
  }
}
