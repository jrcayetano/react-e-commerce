import React from "react";

const Products = () => {
  return (
    <div class="products">
      <div class="banner">
        <img
          class="img-fluid"
          src="https://images-eu.ssl-images-amazon.com/images/G/30/gaming2020/trafficdrivers/ILM/ILM_650_x_45._CB428851601_.jpg"
        />
      </div>
      <div class="products-main"></div>
    </div>
  );
};

export default Products;

/*
<div class="banner">
  <img
    class="img-fluid"
    src="https://images-eu.ssl-images-amazon.com/images/G/30/gaming2020/trafficdrivers/ILM/ILM_650_x_45._CB428851601_.jpg"
  />
</div>
<div class="products-main">
  <app-product-filter (change)="onFilterChange($event)"></app-product-filter>
  <app-products-grid>
    <ng-container *ngIf="!isOffers; else productOfferCard">
      <app-product-card
        (click)="onCardClick(product)"
        *ngFor="let product of products$ | async; let i = index"
        [product]="product"
        (buy)="onBuyProduct($event)"
        (favorite)="onFavoriteProduct($event)"
        [class.border-top-card]="i !== 0 && i !== 1 && i !== 2"
      ></app-product-card>
    </ng-container>
  </app-products-grid>
  <app-basket-list></app-basket-list>
</div>

<ng-template #productOfferCard>
  <app-product-offer-card
    (click)="onCardClick(product)"
    *ngFor="let product of products$ | async; let i = index"
    [product]="product"
    (buy)="onBuyProduct($event)"
    (favorite)="onFavoriteProduct($event)"
    [class.border-top-card]="i !== 0 && i !== 1 && i !== 2"
  >
  </app-product-offer-card>
</ng-template>


*/
