import { Injectable } from '@angular/core';
import {Roller} from "../types/roller.type";

@Injectable({
  providedIn: 'root'
})
export class RollerService {
  rollers: Roller[] = [];

  constructor() {
    const rollers = localStorage.getItem('rollers');
    if (rollers) {
      this.rollers = JSON.parse(rollers);
    }
    this.rollers.forEach(r => {
      r.price = +r.price;
      r.stock = +r.stock;
    })
  }

  add(roller: Roller) {
    if(!this.rollers.some(r => r.name === roller.name)) {
      this.rollers.push(roller);
      this.saveRollers();
    } else {
      alert(`${roller.name} existe déjà`);
    }
  }

  remove(roller: Roller) {
    if(confirm(`Voulez-vous vraiment supprimer ${roller.name} ?`)) {
      const i = this.rollers.findIndex(r => r.id === roller.id);
      console.log(roller.id, i);
      console.table(this.rollers)
      if(i >= 0) {
        this.rollers.splice(i, 1);
        this.saveRollers();
      } else {
        alert('Aucun roller à supprimer')
      }
    }

  }

  saveRollers() {
    localStorage.setItem('rollers', JSON.stringify(this.rollers));
  }

  generateId() {
    return (this.rollers[this.rollers.length - 1]?.id || 0 ) + 1;
  }

  changeStock(roller: Roller, stock: number) {
    const rollerIndex = this.rollers.findIndex(r => r.id === roller.id);
    if(rollerIndex >= 0) {
      this.rollers[rollerIndex].stock += stock;
      this.saveRollers();
    }
  }
}
