import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
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
  private readonly cardService = inject(CardService);
  cards: CardData[] = [];
  ngOnInit(): void {
    this.cardService.getCards().subscribe({
      next: (cards) => {
        this.cards = [...cards];
      },
      error: (err) => {
        console.error('[HomeComponent] Error loading cards:', err);
        this.cards = [];
      },
    });
  }
  trackByTitle(index: number, card: CardData): string {
    return card.title;
  }
}