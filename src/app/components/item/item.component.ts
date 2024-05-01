import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroceryItem } from '../../data/grocery.types';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() item!: GroceryItem;

  toggleBought(item: GroceryItem) {
    item.isBought = !item.isBought;
  }
}
