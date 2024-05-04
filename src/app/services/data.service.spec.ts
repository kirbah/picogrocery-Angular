import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { GroceryItem } from '../data/grocery.types';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);

    // Clear local storage before each test
    window.localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return default grocery items if local storage is empty', () => {
    const groceryList = service.getAllGroceryList();
    expect(groceryList).toBeTruthy();
    expect(groceryList.length).toBeGreaterThan(0);
  });

  it('should add item correctly and persist to local storage', () => {
    const initialLength = service.getAllGroceryList().length;
    const newItem: GroceryItem = { name: 'Test Item', isBought: false };
    service.addItem(newItem);
    const groceryList = service.getAllGroceryList();
    expect(groceryList.length).toBe(initialLength + 1);
    expect(groceryList[0]).toEqual(newItem);

    // Check if added item is persisted in local storage
    const storedData = JSON.parse(
      window.localStorage.getItem(service['localStorageKey']) || '[]'
    );
    expect(storedData).toContain(newItem);
  });

  it('should remove item correctly and update local storage', () => {
    const initialLength = service.getAllGroceryList().length;
    const itemToRemove = service.getAllGroceryList()[0];
    service.removeItem(itemToRemove);
    const groceryList = service.getAllGroceryList();
    expect(groceryList.length).toBe(initialLength - 1);
    expect(groceryList.includes(itemToRemove)).toBe(false);

    // Check if removed item is updated in local storage
    const storedData = JSON.parse(
      window.localStorage.getItem(service['localStorageKey']) || '[]'
    );
    expect(storedData).not.toContain(itemToRemove);
  });

  it('should toggle item bought status and update boughtTime', () => {
    const itemToToggle = service.getAllGroceryList()[0];
    service.toggleBought(itemToToggle);

    // Check if the bought status is toggled
    const actual = service.getAllGroceryList()[0];
    expect(actual.isBought).toBe(true);
    expect(actual.boughtTime).toBeTruthy();
  });

  it('should toggle item bought status to false and remove boughtTime', () => {
    const itemToToggle = service.getAllGroceryList()[1];
    service.toggleBought(itemToToggle);

    // Check if the bought status is toggled
    const actual = service.getAllGroceryList()[1];
    expect(actual.isBought).toBe(false);
    expect(actual.boughtTime).toBeNull();
  });
});
