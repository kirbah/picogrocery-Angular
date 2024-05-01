import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() remove: EventEmitter<GroceryItem> = new EventEmitter<GroceryItem>();

  toggleBought(item: GroceryItem) {
    item.isBought = !item.isBought;
    if (item.isBought) {
      item.boughtTime = new Date();
    } else {
      item.boughtTime = null;
    }
  }

  removeItem(item: GroceryItem): void {
    this.remove.emit(item);
  }
}
