import { GroceryItem } from './grocery.types';

// Sample grocery items
export const groceryList: GroceryItem[] = [
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
