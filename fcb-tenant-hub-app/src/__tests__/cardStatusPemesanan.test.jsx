import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardStatusPemesanan from '../components/elements/CardStatusPemesanan';

describe('<CardStatusPemesanan />', () => {
    
    it('Menampilkan semua isi card sesuai dengan props', () => {
        const props = {
            id : 'test-pesanan-id',
        };
        
        render(<CardStatusPemesanan {...props} />);

        expect(screen.getByTestId("idpesanan")).toHaveTextContent(`Pesanan ${props.id}`);
  });
});