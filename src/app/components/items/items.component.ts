import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemComponent } from '../item/item.component';
import { GroceryItem } from '../../data/grocery.types';
import { groceryList } from '../../data/grocery.data';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent {
  @Input() showBoughtItems = true;

  groceryList: GroceryItem[] = groceryList;

  removeItem(item: GroceryItem): void {
    const index = this.groceryList.indexOf(item);
    if (index !== -1) {
      this.groceryList.splice(index, 1); // Remove the item from the array
    }
  }
}
