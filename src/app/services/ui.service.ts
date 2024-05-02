import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private toggleShowAddItem: boolean = false;
  private toggleShoppingMode: boolean = true;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddItem(): void {
    this.toggleShowAddItem = !this.toggleShowAddItem;
    this.subject.next({ toggleShowAddItem: this.toggleShowAddItem });
  }

  toggleShopping(): void {
    this.toggleShoppingMode = !this.toggleShoppingMode;
    this.subject.next({ toggleShoppingMode: this.toggleShoppingMode });
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
