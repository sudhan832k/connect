import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { config } from '../../env';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket!: Socket;

  constructor() {}

  connect(): void {
    this.socket = io(
      `${config.backend.url}${config.socket.nameSpaces.privatechat}`,
      { withCredentials: true }
    );

    this.socket.on('connect', () => {
      console.log('Connected to chat namespace');
      //this.joinRoom(userId); // Join user's unique room
    });

    this.socket.on('connect_error', (err) => {
      console.error('Connection failed:', err.message);
    });
  }

  // Join room
  joinRoom(receiverId: string): void {
    this.socket.emit('joinRoom', receiverId);
    console.log(`Joined room with receiverId ${receiverId}`);
  }

  sendMessage(receiverId: string, message: string): void {
    this.socket.emit('messageFromClient', { receiverId, message });
  }

  responseFromServer(): Observable<{ messages: any }> {
    return new Observable((observer) => {
      this.socket.on('responseFromServer', (data) => {
        console.log('onMessage', data);
        observer.next(data); // Emit the received message to the observer
      });
    });
  }

  disconnect(): void {
    this.socket.disconnect();
    console.log('Disconnected from server');
  }
}
