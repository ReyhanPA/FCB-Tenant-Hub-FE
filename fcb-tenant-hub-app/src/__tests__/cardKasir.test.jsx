// import React from 'react';
// import '@testing-library/jest-dom';
// import { render, screen, fireEvent } from '@testing-library/react';
// import Axios from 'axios';
// import CardKasir from '../components/elements/CardKasir'; // Update the path accordingly

// // Mock Axios to prevent actual HTTP requests during testing
// jest.mock('axios');

// describe('<CardKasir />', () => {
//     const props = {
//         gambar: 'path/to/image.jpg',
//         namaToko: 'Warung Test',
//         tenantid: '123456'
//     };

//     it('renders correctly', () => {
//         render(<CardKasir {...props} />);
        
//         // Check if elements are rendered
//         expect(screen.getByAltText('gambar toko')).toBeInTheDocument();
//         expect(screen.getByText('Warung Test')).toBeInTheDocument();
//         expect(screen.getByText('Hapus')).toBeInTheDocument();
//     });

//     it('deletes tenant on button click', async () => {
//         render(<CardKasir {...props} />);

//         // Mock the Axios delete request
//         Axios.delete.mockResolvedValueOnce({ data: 'Success delete' });

//         // Click the delete button
//         fireEvent.click(screen.getByText('Hapus'));

//         // Confirm alert should be called
//         expect(window.confirm).toHaveBeenCalled();

//         // Confirm alert with "Ya" button
//         window.confirm.mockReturnValueOnce(true);

//         // Wait for the Axios delete to complete
//         await screen.findByText('Success delete');

//         // Check if the delete function was called with the correct URL
//         expect(Axios.delete).toHaveBeenCalledWith('http://localhost:4000/tenant/deletetenant/123456');

//         // Check if window.location.reload() was called
//         expect(window.location.reload).toHaveBeenCalled();
//     });
// });
// Import the CSS file and mock it
jest.mock('react-confirm-alert/src/react-confirm-alert.css', () => ({}));
import React from "react";
import { render, screen } from "@testing-library/react";
// import renderer from 'react-test-renderer'
// //import data modelnya gimana ini?
import CardKasir from "../components/elements/CardKasir";
import "@testing-library/jest-dom";

describe("<CardKasir />", () => {
  it("Menampilkan semua isi card sesuai dengan props", () => {
    const props = {
      gambar: "Nasi Goreng",
      namaToko: "Warung Pak Man",
    };

    render(<CardKasir {...props} />);

    expect(screen.getByText(props.namaToko)).toBeInTheDocument();
    expect(screen.getByAltText(props.gambar)).toBeInTheDocument();
  });
});