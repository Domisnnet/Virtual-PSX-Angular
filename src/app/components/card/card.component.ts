import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent{
  @Input() image!: string;
  @Input() title!: string;
  @Input() label!: string;
  @Input() price!: number;
  ngOnInit() {
    console.log('IMAGE:', this.image);
  }
}