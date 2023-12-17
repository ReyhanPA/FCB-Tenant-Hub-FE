import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Use the appropriate router (e.g., BrowserRouter)
import CardMenuTenant from "../components/elements/CardMenuTenant";
import "@testing-library/jest-dom";

describe('<CardMenuTenant />', () => {
    it("Displays all card content according to props", () => {
        const props = {
            gambar: "gambar1.jpg",
            namaMakanan: "Nasi Goreng Pisan"
        };

        render(
            <CardMenuTenant {...props}/>
        );

        expect(screen.getByAltText(props.gambar)).toBeInTheDocument();
        expect(screen.getByText(props.namaMakanan)).toBeInTheDocument();
        
    });
});

