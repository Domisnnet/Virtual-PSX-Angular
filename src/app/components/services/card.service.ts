import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface CardData {
  image: string;
  title: string;
  label: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private readonly cardsUrl = 'assets/data/cards.json';
  constructor(private http: HttpClient) {}
  getCards(): Observable<CardData[]> {
    return this.http.get<CardData[]>(this.cardsUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('[CardService] Failed to load cards:', error);
        if (error.status === 404) {
          console.error('[CardService] cards.json not found at:', this.cardsUrl);
        }
        return throwError(() => new Error('Não foi possível carregar os cards.'));
      })
    );
  }
}