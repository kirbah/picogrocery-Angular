import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsComponent } from './items.component';
import { CommonModule } from '@angular/common';
import { UiService } from '../../services/ui.service';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs';
import { GroceryItem } from '../../data/grocery.types';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;
  let uiServiceSpy: jasmine.SpyObj<UiService>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    const uiServiceSpyObj = jasmine.createSpyObj('UiService', ['onToggle']);
    const dataServiceSpyObj = jasmine.createSpyObj('DataService', [
      'getAllGroceryList',
      'removeItem',
    ]);

    await TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [
        { provide: UiService, useValue: uiServiceSpyObj },
        { provide: DataService, useValue: dataServiceSpyObj },
      ],
    }).compileComponents();

    uiServiceSpy = TestBed.inject(UiService) as jasmine.SpyObj<UiService>;
    dataServiceSpy = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;

    // Mock the onToggle() method of uiService to return an observable
    uiServiceSpy.onToggle.and.returnValue(of({ toggleShoppingMode: true }));

    // Mock the getAllGroceryList() method of dataService to return some mock data
    dataServiceSpy.getAllGroceryList.and.returnValue([
      { name: 'Apples', isBought: false },
      { name: 'Bananas', isBought: true },
    ] as GroceryItem[]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set groceryList on initialization', () => {
    expect(component.groceryList).toEqual([
      { name: 'Apples', isBought: false },
      { name: 'Bananas', isBought: true },
    ] as GroceryItem[]);
  });

  it('should call dataService removeItem() when removeItem() is called', () => {
    const mockItem: GroceryItem = { name: 'Apples', isBought: false };
    component.removeItem(mockItem);
    expect(dataServiceSpy.removeItem).toHaveBeenCalledWith(mockItem);
  });
});
