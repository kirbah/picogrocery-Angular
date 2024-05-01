// Define the type for a grocery item
export type GroceryItem = {
  name: string;
  isBought: boolean;
  boughtTime?: Date | null; // Optional, since it's only applicable if the item is bought
};
