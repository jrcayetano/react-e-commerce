import React from "react";
import { cleanup, render } from "@testing-library/react";
import Footer from "./../components/Home/Footer";

afterEach(cleanup);

test("renders contact information", () => {
  const { getByText } = render(<Footer />);
  const contactTitle = getByText("Información de contacto");
  expect(contactTitle).toBeInTheDocument();
});

test("renders address title", () => {
  const { getByText } = render(<Footer />);
  const title = getByText("Dirección");
  expect(title).toBeInTheDocument();
});

test("renders address value", () => {
  const { getByText } = render(<Footer />);
  const value = getByText("Calatraba, 6, 08017 Barcelona");
  expect(value).toBeInTheDocument();
});

test("renders phone title", () => {
  const { getByText } = render(<Footer />);
  const title = getByText("Teléfono");
  expect(title).toBeInTheDocument();
});

test("renders phone value", () => {
  const { getByText } = render(<Footer />);
  const value = getByText("+34 666666666");
  expect(value).toBeInTheDocument();
});

test("renders email title", () => {
  const { getAllByText } = render(<Footer />);
  const title = getAllByText("E-mail");
  expect(title.length).toBe(2);
});

test("renders email value", () => {
  const { getByText } = render(<Footer />);
  const value = getByText("be-commerce@mail.com");
  expect(value).toBeInTheDocument();
});

test("renders hours opened title", () => {
  const { getAllByText } = render(<Footer />);
  const title = getAllByText("Horario de atención");
  expect(title.length).toBe(2);
});

test("renders hours opened value", () => {
  const { getAllByText } = render(<Footer />);
  const value = getAllByText("Lun - Vie / 10:00 - 14:00");
  expect(value.length).toBe(2);
});

test("renders whatsapp title", () => {
  const { getByText } = render(<Footer />);
  const title = getByText("Whatsapp");
  expect(title).toBeInTheDocument();
});

test("renders whatsapp value", () => {
  const { getByText } = render(<Footer />);
  const value = getByText("+34 654 987 765");
  expect(value).toBeInTheDocument();
});

test("renders use conditions", () => {
  const { getByText } = render(<Footer />);
  const title = getByText("Condiciones de Uso y de venta");
  expect(title).toBeInTheDocument();
});

test("renders privacity advice", () => {
  const { getByText } = render(<Footer />);
  const title = getByText("Aviso de privacidad");
  expect(title).toBeInTheDocument();
});

test("renders legal information", () => {
  const { getByText } = render(<Footer />);
  const title = getByText("Área legal");
  expect(title).toBeInTheDocument();
});

test("renders cookies", () => {
  const { getByText } = render(<Footer />);
  const title = getByText("Cookies");
  expect(title).toBeInTheDocument();
});

test("renders adds", () => {
  const { getByText } = render(<Footer />);
  const title = getByText("Publicidad basada en intereses");
  expect(title).toBeInTheDocument();
});

test("renders reserved rights", () => {
  const { getByText } = render(<Footer />);
  const title = getByText(
    "1996-2020, E-commerce.com inc o afilidados. Todos los derechos reservados"
  );
  expect(title).toBeInTheDocument();
});
