import { Pipe, PipeTransform } from '@angular/core';
import {Roller} from "../types/roller.type";

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: Roller[], search: string): Roller[] {
    return value.filter((a) => {
      return a.name.toLowerCase().includes(search.toLowerCase());
    });
  }

}
