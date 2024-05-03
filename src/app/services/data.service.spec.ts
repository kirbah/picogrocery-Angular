import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { GroceryItem } from '../data/grocery.types';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all grocery items', () => {
    const groceryList = service.getAllGroceryList();
    expect(groceryList).toBeTruthy();
    expect(groceryList.length).toBeGreaterThan(0);
  });

  it('should add item correctly', () => {
    const initialLength = service.getAllGroceryList().length;
    const newItem: GroceryItem = { name: 'Test Item', isBought: false };
    service.addItem(newItem);
    const groceryList = service.getAllGroceryList();
    expect(groceryList.length).toBe(initialLength + 1);
    expect(groceryList[0]).toEqual(newItem);
  });

  it('should remove item correctly', () => {
    const initialLength = service.getAllGroceryList().length;
    const itemToRemove = service.getAllGroceryList()[0];
    service.removeItem(itemToRemove);
    const groceryList = service.getAllGroceryList();
    expect(groceryList.length).toBe(initialLength - 1);
    expect(groceryList.includes(itemToRemove)).toBe(false);
  });
});
