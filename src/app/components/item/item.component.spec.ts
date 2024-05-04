import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemComponent } from './item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { GroceryItem } from '../../data/grocery.types';
import { DataService } from '../../services/data.service';
import { BehaviorSubject } from 'rxjs';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let mockItem: GroceryItem;
  let dataService: DataService;
  let toggleBoughtSpy: jasmine.Spy;
  let removeItemSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule, CommonModule],
      providers: [
        {
          provide: DataService,
          useValue: {
            toggleBought: jasmine
              .createSpy('toggleBought')
              .and.returnValue(new BehaviorSubject(null)),
            removeItem: jasmine
              .createSpy('removeItem')
              .and.returnValue(new BehaviorSubject(null)),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    mockItem = { name: 'Initial Test Item', isBought: false };
    component.item = mockItem;
    fixture.detectChanges();
    toggleBoughtSpy = TestBed.inject(DataService).toggleBought as jasmine.Spy;
    removeItemSpy = TestBed.inject(DataService).removeItem as jasmine.Spy;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit remove event when removeItem() is called', () => {
    component.removeItem(mockItem);
    expect(removeItemSpy).toHaveBeenCalledWith(mockItem);
  });

  it('should toggle item bought status and update boughtTime', () => {
    component.toggleBought(mockItem);
    expect(toggleBoughtSpy).toHaveBeenCalledWith(mockItem);
  });
});
