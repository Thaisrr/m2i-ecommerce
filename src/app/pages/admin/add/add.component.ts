import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {RollerService} from "../../../utils/services/roller.service";
import {Roller} from "../../../utils/types/roller.type";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  rollerForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    image: new FormControl(''),
    stock: new FormControl(0)
  });

  constructor(private rollerService: RollerService) {}

  handleSubmit() {
    const id = this.rollerService.generateId();
    this.rollerService.add({
      id,
      ...this.rollerForm.value
    } as Roller);

  }
}
