import React from "react";
import { render, screen } from "@testing-library/react";
import CardMenu from "../components/elements/CardMenu";
import "@testing-library/jest-dom";

describe("<CardMenu />", () => {
  it("Menampilkan semua isi card sesuai dengan props", () => {
    const props = {
      children: "Nasi Goreng",
      deskripsi: "Enak loh",
      stok: 2,
      harga: 15000,
      gambar: "/makanan.jpeg",
    };

    render(<CardMenu {...props} />);

    expect(screen.getByText(props.children)).toBeInTheDocument();
    expect(screen.getByText(props.deskripsi)).toBeInTheDocument();
    expect(screen.getByTestId("stok")).toHaveTextContent(`Tersedia ${props.stok} stok`);
    expect(screen.getByText("Rp 15.000,00")).toBeInTheDocument();
    expect(screen.getByAltText(props.gambar)).toBeInTheDocument();
  });
});