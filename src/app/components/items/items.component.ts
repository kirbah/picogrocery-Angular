import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ItemComponent } from '../item/item.component';
import { GroceryItem } from '../../data/grocery.types';
import { groceryList } from '../../data/grocery.data';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, ItemComponent, MatListModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent {
  @Input() showBoughtItems = true;

  groceryList: GroceryItem[] = groceryList;
}
