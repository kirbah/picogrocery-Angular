import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroceryItem } from '../../data/grocery.types';
import { UiService } from '../../services/ui.service';
import { DataService } from '../../services/data.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
})
export class AddItemComponent implements OnInit {
  private uiService = inject(UiService);
  private dataService = inject(DataService);
  itemName: string = '';
  showAddItem: boolean = false;

  faCheck = faCheck;
  faTimes = faTimes;

  ngOnInit() {
    this.uiService.onToggle().subscribe((data) => {
      if (data.toggleShowAddItem !== undefined) {
        this.showAddItem = data.toggleShowAddItem;
      }
    });
  }

  onSubmit() {
    const item: GroceryItem = {
      name: this.itemName,
      isBought: false,
    };
    this.dataService.addItem(item);

    this.itemName = '';
    this.uiService.toggleAddItem();
  }

  closeAddItem() {
    this.uiService.toggleAddItem();
  }
}
