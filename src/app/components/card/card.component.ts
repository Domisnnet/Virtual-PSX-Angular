import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({ required: true }) image = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) label = '';
  @Input({ required: true }) price = 0;
}