import React from "react";
import { cleanup, render } from "@testing-library/react";

import { Route, Switch } from "react-router-dom";
import ProductCard from "./../components/Products/ProductCard";
import { mockProduct } from "./mocks/Product.mock";
import { create, act } from "react-test-renderer";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

describe("Product card component", () => {
  test("component render", () => {
    const wrapper = shallow(<ProductCard product={mockProduct} />);
    expect(wrapper.exists()).toBe(true);
  });

  test("Product card - render tile", () => {
    const wrapper = shallow(<ProductCard product={mockProduct} />);
    const title = wrapper.find(".product-card__info__title").text();
    expect(title).toBe("Casio Reloj Vintage");
  });

  test("Product card - render description", () => {
    const wrapper = shallow(<ProductCard product={mockProduct} />);
    const description = wrapper.find(".product-card__info__description").text();
    expect(description).toBe(
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    );
  });

  test("Product card - render reviews", () => {
    const wrapper = shallow(<ProductCard product={mockProduct} />);
    const reviews = wrapper.find(".product-card__info__rating__reviews").text();
    expect(reviews).toBe("2");
  });

  test("Product card - render price", () => {
    const wrapper = shallow(<ProductCard product={mockProduct} />);
    const price = wrapper.find(".product-card__info__price").text();
    expect(price).toBe("10.5 €");
  });

  test("Product card - render delivery", () => {
    const wrapper = shallow(<ProductCard product={mockProduct} />);
    const delivery = wrapper.find(".product-card__info__delivery").text();
    expect(delivery).toBe("Recíbelo el 13 de Octubre");
  });

  test("Product card - most seller", () => {
    const wrapper = shallow(<ProductCard product={mockProduct} />);
    const mostseller = wrapper.props("product").mostseller;
    expect(mostseller).toBeFalsy();
  });
});
