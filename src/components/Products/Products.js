import React, { useEffect, useState } from "react";
import http from "axios";
import { SERVER_URL, API_PRODUCTS } from "./../../consts/api";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    http
      .get(`${SERVER_URL}/${API_PRODUCTS}`)
      .then((response) => setProducts(response.data));
  }, []);

  return (
    <>
      <div className="products">
        <div className="banner">
          <img
            className="img-fluid"
            src="https://images-eu.ssl-images-amazon.com/images/G/30/gaming2020/trafficdrivers/ILM/ILM_650_x_45._CB428851601_.jpg"
          />
        </div>
        <div className="products-main">
          <div className="votaciones"></div>
          <div className="products">
            <div className="products__list">
              {products.map((product, index) => (
                <ProductCard
                  product={product}
                  key={`product_${index}`}
                  className="test"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Products);

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
