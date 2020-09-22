import React, { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross } from "@fortawesome/free-solid-svg-icons";
import Rating from "./Rating";

const ProductFilter = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleCloseClick = () => {};
  const handleFilter = () => {};
  const handleStarClick = () => {};
  return (
    <div
      className={classnames({
        "product-filter": true,
        isOpened: isOpened,
      })}
    >
      <div className="product-filter__header d-block d-lg-none">
        <button className="btn btn-link" onclick={handleCloseClick}>
          <FontAwesomeIcon icon={faCross} />
        </button>
      </div>
      <form>
        <div class="form-row">
          <div class="col form-group">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Búsqueda"
              aria-label="Search"
            />
          </div>
        </div>
        <h6>Categoria</h6>
        <div class="form-row product-filter__category">
          <div class="col form-group">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Reloj
              </label>
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Lampara
              </label>
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Reproductor
              </label>
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Raton
              </label>
            </div>
          </div>
        </div>
        <h6>Precio</h6>
        <div class="form-row product-filter__price">
          <div class="col-6 form-group">
            <label for="exampleInputEmail1">Min</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              min="0"
            />
          </div>
          <div class="col-6 form-group">
            <label for="exampleInputEmail1">Max</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              min="0"
            />
          </div>
        </div>
        <h6>Valoraciones a partir de</h6>
        <div class="form-row product-filter__rating">
          <div class="product-filter__stars">
            <button class="btn btn-link" onClick={() => handleStarClick(4)}>
              <Rating rating={4} />
            </button>
          </div>
          <div class="product-filter__stars">
            <button class="btn btn-link" onClick={() => handleStarClick(3)}>
              <Rating rating={3} />
            </button>
          </div>
          <div class="product-filter__stars">
            <button class="btn btn-link" onClick={() => handleStarClick(2)}>
              <Rating rating={2} />
            </button>
          </div>
          <div class="product-filter__stars">
            <button class="btn btn-link" onClick={() => handleStarClick(1)}>
              <Rating rating={1} />
            </button>
          </div>
        </div>
      </form>
      <button class="btn btn-light d-block d-lg-none" onclick={handleFilter}>
        Filtro
      </button>
    </div>
  );
};

export default React.memo(ProductFilter);

/*

<div class="product-filter" [class.isOpened]="isOpened">
  <div class="product-filter__header d-block d-lg-none">
    <button class="btn btn-link" (click)="onCloseClick()">
      <fa-icon [icon]="faCross"></fa-icon>
    </button>
  </div>
  <form [formGroup]="form">
    <div class="form-row">
      <div class="col form-group">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Búsqueda"
          aria-label="Search"
          formControlName="searchTerm"
        />
      </div>
    </div>
    <h6>Categoria</h6>
    <div class="form-row product-filter__category">
      <div class="col form-group">
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            formControlName="clock"
          />
          <label class="form-check-label" for="exampleCheck1">Reloj</label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            formControlName="light"
          />
          <label class="form-check-label" for="exampleCheck1">Lampara</label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            formControlName="player"
          />
          <label class="form-check-label" for="exampleCheck1"
            >Reproductor</label
          >
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            formControlName="mouse"
          />
          <label class="form-check-label" for="exampleCheck1">Raton</label>
        </div>
      </div>
    </div>
    <h6>Precio</h6>
    <div class="form-row product-filter__price">
      <div class="col-6 form-group">
        <label for="exampleInputEmail1">Min</label>
        <input
          type="number"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          min="0"
          formControlName="min"
        />
      </div>
      <div class="col-6 form-group">
        <label for="exampleInputEmail1">Max</label>
        <input
          type="number"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          min="0"
          formControlName="max"
        />
      </div>
    </div>
    <h6>Valoraciones a partir de</h6>
    <div class="form-row product-filter__rating">
      <div class="product-filter__stars">
        <button class="btn btn-link" (click)="onStarsClick(4)">
          <app-rating-star [rating]="4"></app-rating-star>
        </button>
      </div>
      <div class="product-filter__stars">
        <button class="btn btn-link" (click)="onStarsClick(3)">
          <app-rating-star [rating]="3"></app-rating-star>
        </button>
      </div>
      <div class="product-filter__stars">
        <button class="btn btn-link" (click)="onStarsClick(2)">
          <app-rating-star [rating]="2"></app-rating-star>
        </button>
      </div>
      <div class="product-filter__stars">
        <button class="btn btn-link" (click)="onStarsClick(1)">
          <app-rating-star [rating]="1"></app-rating-star>
        </button>
      </div>
    </div>
  </form>
</div>
<button class="btn btn-light d-block d-lg-none" (click)="filter()">
  Filtro
</button>


*/
