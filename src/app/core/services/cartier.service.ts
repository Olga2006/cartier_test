import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cartier } from '../models/cartier.model';
import { Proposition } from '../models/proposition.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartierService {

  constructor(private http: HttpClient) { }

  getAllCartier(): Observable<Cartier> {
    return this.http.get<Cartier>('http://localhost:3000/cartier');
  }

  getAllPropositions(): Observable<Proposition[]> {
    return this.http.get<Proposition[]>('http://localhost:3000/propositions');
  }

  getPropositionByIdPart(id: number): Observable<Proposition> {
    return this.http.get<Proposition>(`http://localhost:3000/propositions/${id}`);
  }
}
