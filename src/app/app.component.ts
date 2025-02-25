import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemsComponent } from './components/items/items.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ItemsComponent, AddItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
