import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterModule } from '@angular/router';
import { AuthenticateService } from '../service/authenticate.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private authenticateService: AuthenticateService,
    private tosterService: ToastrService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      userContactNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ]),
      userPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
    console.log(this.loginForm);
  }

  userLogin() {
    const newUser = this.loginForm.value;
    const res = this.authenticateService.userSignin(newUser);
    res.subscribe((res) => {
      if (res.hasError) this.tosterService.warning(res.message);
      else {
        this.tosterService.success(res.message);
        this.router.navigate(['/home']);
      }
    });
  }
}
