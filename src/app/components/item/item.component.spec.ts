import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemComponent } from './item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { GroceryItem } from '../../data/grocery.types';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let mockItem: GroceryItem;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule, CommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    mockItem = { name: 'Initial Test Item', isBought: false };
    component.item = mockItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit remove event when removeItem() is called', () => {
    const mockItem: GroceryItem = { name: 'Test Item', isBought: false };
    let emittedItem: GroceryItem | undefined;
    component.remove.subscribe((item) => (emittedItem = item));
    component.removeItem(mockItem);
    expect(emittedItem).toEqual(mockItem);
  });

  it('should toggle item bought status and update boughtTime', () => {
    const mockItem: GroceryItem = { name: 'Test Item', isBought: false };
    component.toggleBought(mockItem);
    expect(mockItem.isBought).toBe(true);
    expect(mockItem.boughtTime).toBeDefined();
  });

  it('should toggle item bought status and reset boughtTime if already bought', () => {
    const mockItem: GroceryItem = {
      name: 'Test Item',
      isBought: true,
      boughtTime: new Date(),
    };
    component.toggleBought(mockItem);
    expect(mockItem.isBought).toBe(false);
    expect(mockItem.boughtTime).toBeNull();
  });
});
