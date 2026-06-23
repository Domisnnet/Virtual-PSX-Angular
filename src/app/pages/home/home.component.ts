import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from '@components/menu-bar/menu-bar.component';
import { CardComponent } from '@app/components/card/card.component';
import { CardService, CardData } from '@app/components/services/card.service';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    CommonModule,
    MenuBarComponent,
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: CardData[] = [];
  constructor(private cardService: CardService) {}
  ngOnInit(): void {
    this.cardService.getCards().subscribe(cards => {
      this.cards = cards;
    });
  }
}