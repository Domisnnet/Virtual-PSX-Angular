import { Component } from '@angular/core';
import { MenuBarComponent } from '@components/menu-bar/menu-bar.component';
import { CardComponent } from "@app/components/card/card.component";

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    MenuBarComponent,
    CardComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}