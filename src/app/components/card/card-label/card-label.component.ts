import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-label',
  standalone: true,
  imports: [],
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.scss'],
})
export class CardLabelComponent {
  @Input() label!: string;
}