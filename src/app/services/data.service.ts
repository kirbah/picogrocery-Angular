import { Injectable } from '@angular/core';
import { GroceryItem } from '../data/grocery.types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private localStorageKey = 'groceryList';

  constructor() {
    // Load data from local storage when the service is initialized
    const savedData = window.localStorage.getItem(this.localStorageKey);
    if (savedData) {
      this.groceryList = JSON.parse(savedData);
    }
  }

  private groceryList: GroceryItem[] = [
    // Default data if local storage is empty or not available
    { name: 'Apples', isBought: false },
    {
      name: 'Bananas',
      isBought: true,
      boughtTime: new Date('2024-05-01T10:00:00'),
    },
    { name: 'Milk', isBought: false },
    {
      name: 'Bread',
      isBought: true,
      boughtTime: new Date('2024-04-30T15:30:00'),
    },
    { name: 'Eggs', isBought: false },
    { name: 'Spinach', isBought: false },
    {
      name: 'Chicken',
      isBought: true,
      boughtTime: new Date('2024-04-29T12:45:00'),
    },
    { name: 'Rice', isBought: false },
    { name: 'Pasta', isBought: false },
    { name: 'Tomatoes', isBought: false },
  ];

  getAllGroceryList(): GroceryItem[] {
    return this.groceryList;
  }

  addItem(item: GroceryItem): void {
    this.groceryList.unshift(item);
    this.saveData();
  }

  removeItem(item: GroceryItem): void {
    const index = this.groceryList.indexOf(item);
    if (index !== -1) {
      this.groceryList.splice(index, 1);
      this.saveData();
    }
  }

  private saveData(): void {
    window.localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(this.groceryList)
    );
  }
}
