import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Rating from "./Rating";

const ProductFilter = ({ onFilterChange }) => {
  const [isOpened, setIsOpened] = useState(false);

  const [form, setForm] = useState({
    searchTerm: "",
    clock: false,
    light: false,
    player: false,
    mouse: false,
    min: null,
    max: null,
    rating: null,
  });

  const handleCloseClick = () => {
    setIsOpened(false);
  };
  const handleFilterClick = () => {
    setIsOpened(true);
  };

  const handleFilter = (field, value) => {
    if (["clock", "light", "player", "mouse"].indexOf(field) !== -1) {
      setForm({ ...form, [field]: !form[field] });
    } else {
      setForm({ ...form, [field]: value });
    }
  };

  useEffect(() => {
    onFilterChange(form);
  }, [form]);

  return (
    <div>
      <div
        className={classnames({
          "product-filter": true,
          isOpened: isOpened,
        })}
      >
        <div className="product-filter__header d-block d-lg-none">
          <button className="btn btn-link" onClick={handleCloseClick}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <form>
          <div className="form-row">
            <div className="col form-group">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Búsqueda"
                aria-label="Search"
                onChange={(event) =>
                  handleFilter("searchTerm", event.target.value)
                }
              />
            </div>
          </div>
          <h6>Categoria</h6>
          <div className="form-row product-filter__category">
            <div className="col form-group">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={(event) => {
                    handleFilter("clock", event.target.value);
                  }}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Reloj
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={(event) =>
                    handleFilter("light", event.target.value)
                  }
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Lampara
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={(event) =>
                    handleFilter("player", event.target.value)
                  }
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Reproductor
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={(event) =>
                    handleFilter("mouse", event.target.value)
                  }
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Raton
                </label>
              </div>
            </div>
          </div>
          <h6>Precio</h6>
          <div className="form-row product-filter__price">
            <div className="col-6 form-group">
              <label htmlFor="exampleInputEmail1">Min</label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                min="0"
                onChange={(event) => handleFilter("min", event.target.value)}
              />
            </div>
            <div className="col-6 form-group">
              <label htmlFor="exampleInputEmail1">Max</label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                min="0"
                onChange={(event) => handleFilter("max", event.target.value)}
              />
            </div>
          </div>
          <h6>Valoraciones a partir de</h6>
          <div className="form-row product-filter__rating">
            <div className="product-filter__stars">
              <button
                className="btn btn-link"
                type="button"
                onClick={() => handleFilter("rating", 4)}
              >
                <Rating rating={4} />
              </button>
            </div>
            <div className="product-filter__stars">
              <button
                className="btn btn-link"
                type="button"
                onClick={() => handleFilter("rating", 3)}
              >
                <Rating rating={3} />
              </button>
            </div>
            <div className="product-filter__stars">
              <button
                className="btn btn-link"
                type="button"
                onClick={() => handleFilter("rating", 2)}
              >
                <Rating rating={2} />
              </button>
            </div>
            <div className="product-filter__stars">
              <button
                className="btn btn-link"
                type="button"
                onClick={() => handleFilter("rating", 1)}
              >
                <Rating rating={1} />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="filter-button-wrapper">
        <button
          type="button"
          className="btn btn-light d-block d-lg-none"
          onClick={handleFilterClick}
        >
          Filtro
        </button>
      </div>
    </div>
  );
};

export default React.memo(ProductFilter);
