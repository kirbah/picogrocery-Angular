import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButtonToggleModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() addItemClick = new EventEmitter();
  @Output() toggleShopping = new EventEmitter();

  title: string = 'picoGrocery';

  toggleShoppingMode() {
    this.toggleShopping.emit();
  }

  addNewItem() {
    this.addItemClick.emit();
  }
}
