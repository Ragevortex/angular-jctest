import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
addToList(product) {
    window.alert('Your product has been added to the list!');
    this.cartService.addToCart(product);
  }
  constructor(
    private route: ActivatedRoute, private ShoppingListtService: ShoppingListService,
  ) { }
  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
}


}

