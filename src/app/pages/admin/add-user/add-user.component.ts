import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../utils/services/auth.service";
import {User} from "../../../utils/types/user.type";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  handleSubmit() {
    const user = this.form.value as User;
    this.authService.register(user)
      .subscribe({
        next: (res) => {
          if(res) {
           alert("Vous êtes bien enregistré.e !")
            this.router.navigate(['/admin/login'])
          }
        }
      })
  }
}
