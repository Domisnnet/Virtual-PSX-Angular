import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CardData {
  image: string;
  title: string;
  label: string;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class CardService {
  constructor(private http: HttpClient) {}
  getCards(): Observable<CardData[]> {
    return this.http.get<CardData[]>('assets/data/cards.json');
  }
}