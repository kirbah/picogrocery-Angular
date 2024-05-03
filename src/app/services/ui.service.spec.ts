import { TestBed } from '@angular/core/testing';
import { UiService } from './ui.service';

describe('UiService', () => {
  let service: UiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle add item correctly', () => {
    service.toggleAddItem();
    expect(service['toggleShowAddItem']).toBe(true);

    service.toggleAddItem();
    expect(service['toggleShowAddItem']).toBe(false);
  });

  it('should toggle shopping mode correctly', () => {
    service.toggleShopping();
    expect(service['toggleShoppingMode']).toBe(false);

    service.toggleShopping();
    expect(service['toggleShoppingMode']).toBe(true);
  });

  it('should emit correct values on toggle', () => {
    let emittedValue;
    service.onToggle().subscribe((value) => {
      emittedValue = value;
    });

    service.toggleAddItem();
    expect(emittedValue).toEqual({ toggleShowAddItem: true } as any);

    service.toggleShopping();
    expect(emittedValue).toEqual({ toggleShoppingMode: false } as any);
  });
});
