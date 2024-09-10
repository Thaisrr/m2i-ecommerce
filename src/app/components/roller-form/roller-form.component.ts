import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Roller} from "../../utils/types/roller.type";

@Component({
  selector: 'app-roller-form',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './roller-form.component.html',
  styleUrl: './roller-form.component.css'
})
export class RollerFormComponent implements OnChanges {

  @Input() roller?: Roller;
  @Output() submitEvent = new EventEmitter<Roller>();

  rollerForm = new FormGroup({
    name: new FormControl(this.roller?.name || ''),
    description: new FormControl(this.roller?.description || ''),
    price: new FormControl(this.roller?.price || 0),
    image: new FormControl(this.roller?.image || ''),
    stock: new FormControl(this.roller?.stock || 0)
  });

  handleSubmit() {
    this.submitEvent.emit(this.rollerForm.value as Roller);
    //this.rollerForm.reset();
    console.log('RollerFormComponent - handleSubmit')

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('RollerFormComponent - ngOnChanges')
    const roller = changes['roller']?.currentValue;
    if(roller) {
      this.rollerForm.patchValue(roller);
    }

  }

}
