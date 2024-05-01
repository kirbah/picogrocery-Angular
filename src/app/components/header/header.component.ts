import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPlus,
  faShoppingCart,
  faCartArrowDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() showBoughtItems = true;
  @Output() addItemClick = new EventEmitter();
  @Output() toggleShopping = new EventEmitter();

  faPlus = faPlus;
  faShoppingCart = faShoppingCart;
  faCartArrowDown = faCartArrowDown;

  title: string = 'picoGrocery';

  toggleShoppingMode() {
    this.toggleShopping.emit();
  }

  addNewItem() {
    this.addItemClick.emit();
  }
}
