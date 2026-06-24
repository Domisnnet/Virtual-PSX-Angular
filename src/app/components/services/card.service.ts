import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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
      map((cards) => cards ?? []),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    let message = 'Erro inesperado ao carregar os cards.';
    if (error.error instanceof ErrorEvent) {
      message = `Erro no cliente: ${error.error.message}`;
    } else {
      message = `Erro na requisição (${error.status}): ${error.message}`;
    }
    console.error('[CardService] getCards failed:', message, error);
    return throwError(() => new Error(message));
  }
}