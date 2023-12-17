import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Use the appropriate router (e.g., BrowserRouter)
import CardTenant from "../components/elements/CardTenant";
import "@testing-library/jest-dom";

describe('<CardTenant />', () => {
    it("Displays all card content according to props", () => {
        const props = {
            children: "TWarung Coba",
            gambar: "gambar1.jpg"
        };

        render(
            <Router> {/* Provide the Router context */}
                <CardTenant {...props}/>
            </Router>
        );

        expect(screen.getByText(props.children)).toBeInTheDocument();
        expect(screen.getByAltText(props.gambar)).toBeInTheDocument();
    });
});