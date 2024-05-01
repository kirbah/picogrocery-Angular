import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { GroceryItem } from '../../data/grocery.types';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() item!: GroceryItem;

  toggleBought(item: GroceryItem) {
    item.isBought = !item.isBought;
    if (item.isBought) {
      item.boughtTime = new Date();
    } else {
      item.boughtTime = null;
    }
    console.log(item);
  }

  removeItem(item: GroceryItem): void {
    console.log(item);
  }
}
