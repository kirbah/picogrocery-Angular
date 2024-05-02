import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroceryItem } from '../../data/grocery.types';
import { UiService } from '../../services/ui.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
})
export class AddItemComponent implements OnInit {
  text: string = '';
  showAddItem: boolean = false;

  faCheck = faCheck;

  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.uiService.onToggle().subscribe((data) => {
      if (data.toggleShowAddItem !== undefined) {
        this.showAddItem = data.toggleShowAddItem;
      }
    });
  }

  onSubmit() {
    console.log(this.text);
    const item: GroceryItem = {
      name: this.text,
      isBought: false,
    };
  }
}
