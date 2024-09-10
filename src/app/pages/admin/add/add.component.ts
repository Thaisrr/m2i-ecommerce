import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {RollerService} from "../../../utils/services/roller.service";
import {Roller} from "../../../utils/types/roller.type";
import {RollerFormComponent} from "../../../components/roller-form/roller-form.component";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RollerFormComponent
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {


  constructor(private rollerService: RollerService) {}

  handleSubmit(roller: Roller) {
    this.rollerService.add(roller)
      .subscribe()

  }
}
