import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupFrom: FormGroup = new FormGroup({
    userName: new FormControl(null),
    userPassword: new FormControl(null),
    userContactNumber: new FormControl(null),
  });

  createUser() {
    const newUser = this.signupFrom.value;
    console.log('formGroup', this.signupFrom);
  }
}
