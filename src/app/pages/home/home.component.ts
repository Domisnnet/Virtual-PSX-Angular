import { Component, ChangeDetectorRef, OnInit, inject } from '@angular/core';
import { CardComponent } from '@app/components/card/card.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { CardService, CardData } from '@app/components/services/card.service';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    HeaderComponent, 
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private readonly cardService = inject(CardService);
  private readonly cdr = inject(ChangeDetectorRef);
  cards: CardData[] = [];
  ngOnInit(): void {
    this.cardService.getCards().subscribe({
      next: (cards) => {
        this.cards = cards ?? [];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('[HomeComponent] Error loading cards:', err);
        this.cards = [];
        this.cdr.detectChanges();
      },
    });
  }
}