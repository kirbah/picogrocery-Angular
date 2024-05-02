import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemComponent } from '../item/item.component';
import { GroceryItem } from '../../data/grocery.types';
import { groceryList } from '../../data/grocery.data';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent implements OnInit {
  showBoughtItems: boolean = true;

  groceryList: GroceryItem[] = groceryList;

  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.uiService.onToggle().subscribe((data) => {
      if (data.toggleShoppingMode !== undefined) {
        this.showBoughtItems = data.toggleShoppingMode;
      }
    });
  }

  removeItem(item: GroceryItem): void {
    const index = this.groceryList.indexOf(item);
    if (index !== -1) {
      this.groceryList.splice(index, 1); // Remove the item from the array
    }
  }
}
