import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../utils/services/auth.service";
import {User} from "../../../utils/types/user.type";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  handleSubmit() {
    const credentials = this.form.value as Pick<User, 'email' | 'password'>;
    this.authService.login(credentials).subscribe({
      next: res => {
        if(res) {
          this.router.navigate(['/'])
        }
      }
    })
  }

}
