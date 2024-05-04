import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { DataService } from '../../services/data.service';
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

  private dataService = inject(DataService);

  faTimes = faTimes;

  toggleBought(item: GroceryItem) {
    this.dataService.toggleBought(item);
  }

  removeItem(item: GroceryItem): void {
    this.dataService.removeItem(item);
  }
}
