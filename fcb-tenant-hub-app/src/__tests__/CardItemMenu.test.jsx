import React from "react";
import { render, screen } from "@testing-library/react";
// import renderer from 'react-test-renderer'
// //import data modelnya gimana ini?
import CardItemMenu from "../components/elements/CardItemMenu";
import "@testing-library/jest-dom";

describe("<CardItemMenu />", () => {
  it("Menampilkan semua isi card sesuai dengan props", () => {
    const props = {
      menu: "Nasi Goreng",
      namaToko: "Warung Pak Man",
      jumlah: 2,
      harga: 10000,
    };

    render(<CardItemMenu {...props} />);

    expect(screen.getByTestId("test1")).toBeInTheDocument();
    expect(screen.getByText(props.menu)).toBeInTheDocument();
    expect(screen.getByText(props.namaToko)).toBeInTheDocument();
    expect(screen.getByText(props.jumlah.toString())).toBeInTheDocument();
    expect(screen.getByText("Rp 10.000,00")).toBeInTheDocument();
  });
});