import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { GroceryItem } from '../../data/grocery.types';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() item!: GroceryItem;
  @Output() remove: EventEmitter<GroceryItem> = new EventEmitter<GroceryItem>();

  faTimes = faTimes;

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
