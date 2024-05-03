import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddItemComponent } from './add-item.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UiService } from '../../services/ui.service';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs';
import { GroceryItem } from '../../data/grocery.types';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('AddItemComponent', () => {
  let component: AddItemComponent;
  let fixture: ComponentFixture<AddItemComponent>;
  let uiServiceSpy: jasmine.SpyObj<UiService>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    const uiServiceSpyObj = jasmine.createSpyObj('UiService', [
      'onToggle',
      'toggleAddItem',
    ]);
    const dataServiceSpyObj = jasmine.createSpyObj('DataService', ['addItem']);

    await TestBed.configureTestingModule({
      imports: [FormsModule, CommonModule, FontAwesomeModule],
      providers: [
        { provide: UiService, useValue: uiServiceSpyObj },
        { provide: DataService, useValue: dataServiceSpyObj },
      ],
    }).compileComponents();

    uiServiceSpy = TestBed.inject(UiService) as jasmine.SpyObj<UiService>;
    dataServiceSpy = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemComponent);
    component = fixture.componentInstance;

    // Mock the onToggle() method of uiService to return an observable
    uiServiceSpy.onToggle.and.returnValue(of({ toggleShowAddItem: true }));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to uiService onToggle() on initialization', () => {
    const testData = { toggleShowAddItem: true };
    uiServiceSpy.onToggle.and.returnValue(of(testData));

    component.ngOnInit();

    expect(uiServiceSpy.onToggle).toHaveBeenCalled();
    expect(component.showAddItem).toEqual(true);
  });

  it('should call dataService addItem() method on form submission', () => {
    const itemName = 'Test Item';
    component.itemName = itemName;

    component.onSubmit();

    expect(dataServiceSpy.addItem).toHaveBeenCalledWith({
      name: itemName,
      isBought: false,
    } as GroceryItem);
    expect(component.itemName).toEqual('');
    expect(uiServiceSpy.toggleAddItem).toHaveBeenCalled();
  });

  it('should call uiService toggleAddItem() on closeAddItem() method', () => {
    component.closeAddItem();
    expect(uiServiceSpy.toggleAddItem).toHaveBeenCalled();
  });
});
