import { Injectable } from '@angular/core';
/**Note this is the same as CartService but renamed List Service for the apps purposes */
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  items = [];

  addToList(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearList() {
    this.items = [];
    return this.items;
  }
}