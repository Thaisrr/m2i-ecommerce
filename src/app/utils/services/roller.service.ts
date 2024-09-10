import { Injectable } from '@angular/core';
import {Roller} from "../types/roller.type";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RollerService {
  apiUrl = environment.apiUrl + '/rollers';
  rollers$ = new BehaviorSubject<Roller[]>([]);

  constructor(private http: HttpClient) {
    this.getAll().subscribe();
  }

  add(roller: Roller) {
    return this.http.post<Roller>(this.apiUrl, roller);
  }

  remove(roller: Roller) {
    if(confirm(`Voulez-vous vraiment supprimer ${roller.name} ?`)) {
      return this.http.delete<Roller>(`${this.apiUrl}/${roller.id}`);
    }
    return
  }

  changeStock(roller: Roller, stock: number) {
    const rollerId = roller.id;
    roller.stock += stock;
    return this.http.patch<Roller>(`${this.apiUrl}/${rollerId}`, {stock: roller.stock}).pipe(
      tap(() => this.getAll().subscribe())
    )
  }

  update(id: number, roller: Roller) {
    return this.http.patch<Roller>(`${this.apiUrl}/${id}`, roller)
  }

  getAll(): Observable<Roller[]> {
    return this.http.get<Roller[]>(this.apiUrl).pipe(
      tap(rollers => this.rollers$.next(rollers))
    )
  }

  getById(id: number): Observable<Roller> {
    return this.http.get<Roller>(`${this.apiUrl}/${id}`);
  }
}
