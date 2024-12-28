import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { AuthenticateService } from '../service/authenticate.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupFrom: FormGroup;
  constructor(
    private authenticateService: AuthenticateService,
    private tosterService: ToastrService
  ) {
    this.signupFrom = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      userPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      userContactNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ]),
    });
  }

  createUser() {
    const newUser = this.signupFrom.value;
    const res = this.authenticateService.createNewUser(newUser);
    res.subscribe((res) => {
      res.hasError
        ? this.tosterService.warning(res.message)
        : this.tosterService.success(res.message);
    });
  }
}
