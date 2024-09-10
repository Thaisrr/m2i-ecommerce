import {Component, OnInit} from '@angular/core';
import {RollerFormComponent} from "../../../components/roller-form/roller-form.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Roller} from "../../../utils/types/roller.type";
import {map, switchMap} from "rxjs";
import {RollerService} from "../../../utils/services/roller.service";

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [
    RollerFormComponent
  ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{
  roller?: Roller;

  constructor(private route: ActivatedRoute, private rollerService: RollerService, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => { // On switch sur un nouvel observable
        if(id) {
          return this.rollerService.getById(+id)
        }
        return [];
      })
    )
      .subscribe({
        next: roller => this.roller = roller
      })
  }

  handleSubmit(roller: Roller) {
    console.log('Updatet= - handleSubmit')

    if(this.roller) {
      this.rollerService.update(this.roller?.id, roller)
        .subscribe({
          next: () => this.router.navigate(['/admin'])
        })
    }

  }

}
