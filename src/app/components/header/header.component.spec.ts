import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiService } from '../../services/ui.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let uiServiceSpy: jasmine.SpyObj<UiService>;

  beforeEach(async () => {
    const uiServiceSpyObj = jasmine.createSpyObj('UiService', [
      'toggleShopping',
      'toggleAddItem',
    ]);

    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      providers: [{ provide: UiService, useValue: uiServiceSpyObj }],
    }).compileComponents();

    uiServiceSpy = TestBed.inject(UiService) as jasmine.SpyObj<UiService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call uiService toggleShopping() when toggleShoppingMode() is called', () => {
    component.toggleShoppingMode();
    expect(uiServiceSpy.toggleShopping).toHaveBeenCalled();
  });

  it('should call uiService toggleAddItem() when addNewItem() is called', () => {
    component.addNewItem();
    expect(uiServiceSpy.toggleAddItem).toHaveBeenCalled();
  });
});
