import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cartier } from '../models/cartier.model';

@Injectable({
  providedIn: 'root'
})
export class CartierService {

  constructor(private http: HttpClient) { }

  getAllCartier(): Observable<Cartier> {
    return this.http.get<Cartier>('http://localhost:3000/cartier');
  }

}
