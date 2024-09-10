import { Injectable } from '@angular/core';
import {Roller} from "../types/roller.type";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RollerService {
  apiUrl = environment.apiUrl + '/rollers';

  constructor(private http: HttpClient) {}

  add(roller: Roller) {
    return this.http.post<Roller>(this.apiUrl, roller);
  }

  remove(roller: Roller) {
    if(confirm(`Voulez-vous vraiment supprimer ${roller.name} ?`)) {
      return this.http.delete<Roller>(`${this.apiUrl}/${roller.id}`);
    }
    return
  }

  changeStock(rollerId: number, stock: number) {
    return this.http.put<Roller>(`${this.apiUrl}/${rollerId}`, {stock});
  }

  update(roller: Roller) {
    return this.http.put<Roller>(`${this.apiUrl}/${roller.id}`, roller);
  }

  getAll(): Observable<Roller[]> {
    return this.http.get<Roller[]>(this.apiUrl);
  }
}
