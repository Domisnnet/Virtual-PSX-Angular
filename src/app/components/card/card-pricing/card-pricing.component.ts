import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [ CurrencyPipe ],
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.scss'],
})
export class CardPricingComponent {
  @Input() price!: number;
}