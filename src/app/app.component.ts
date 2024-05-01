import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './components/items/items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showBoughtItems = true;

  toggleShoppingMode() {
    this.showBoughtItems = !this.showBoughtItems;
  }

  addItem() {
    console.log('TODO: add');
  }
}
