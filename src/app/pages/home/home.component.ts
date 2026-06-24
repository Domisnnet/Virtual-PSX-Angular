import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@app/components/header/header.component';
import { CardComponent } from '@app/components/card/card.component';
import { CardService, CardData } from '@app/components/services/card.service';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: CardData[] = [];
  constructor(private cardService: CardService) {}
  ngOnInit(): void {
    this.cardService.getCards().subscribe({
      next: (cards) => {
        console.log('cards:', cards);
        this.cards = cards;
      },
      error: (err) => {
        console.error('Erro ao carregar cards:', err);
      }
    });
  }
}