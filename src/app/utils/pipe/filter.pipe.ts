import { Pipe, PipeTransform } from '@angular/core';
import {Roller} from "../types/roller.type";

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: Roller[], order: 'asc' | 'desc', search: string): Roller[] {
    const filtered = value.filter(roller => roller.name.toLowerCase().includes(search.toLowerCase()));
    return filtered.sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }
}
