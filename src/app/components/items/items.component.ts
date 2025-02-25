import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemComponent } from '../item/item.component';
import { GroceryItem } from '../../data/grocery.types';
import { UiService } from '../../services/ui.service';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-items',
    imports: [CommonModule, ItemComponent],
    templateUrl: './items.component.html',
    styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
  private uiService = inject(UiService);
  private dataService = inject(DataService);
  showBoughtItems: boolean = true;

  groceryList?: GroceryItem[];

  ngOnInit() {
    this.groceryList = this.dataService.getAllGroceryList();
    this.uiService.onToggle().subscribe((data) => {
      if (data.toggleShoppingMode !== undefined) {
        this.showBoughtItems = data.toggleShoppingMode;
      }
    });
  }
}
