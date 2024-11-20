import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({
      userContactNumber: new FormControl(null, [Validators.required]),
      userPassword: new FormControl(null, [Validators.required]),
    });
  }

  userLogin() {
    const newUser = this.loginForm.value;
    console.log('formGroup', this.loginForm);
  }
}
