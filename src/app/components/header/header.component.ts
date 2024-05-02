import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPlus,
  faShoppingCart,
  faCartArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  showBoughtItems: boolean = true;

  faPlus = faPlus;
  faShoppingCart = faShoppingCart;
  faCartArrowDown = faCartArrowDown;

  title: string = 'picoGrocery';

  constructor(private uiService: UiService) {}

  toggleShoppingMode() {
    this.showBoughtItems = !this.showBoughtItems;
    this.uiService.toggleShopping();
  }

  addNewItem() {
    this.uiService.toggleAddItem();
  }
}
