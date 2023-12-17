import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardPesanan from '../components/elements/CardPesanan';

describe('<CardPesanan />', () => {
    
    it('Menampilkan semua isi card sesuai dengan props', () => {
        const props = {
            namatenant: 'Warung Testing',
            namamenu: 'Menu Testing',
            harga: 20000,
            jumlah: 2,
        };
        
        render(<CardPesanan {...props} />);

        expect(screen.getByText(props.namamenu)).toBeInTheDocument();
        expect(screen.getByTestId("jumlahPesanan")).toHaveTextContent(`Jumlah : ${props.jumlah}`);
        expect(screen.getByTestId("totalHarga")).toHaveTextContent("Rp 40.000,00");
        expect(screen.getByTestId("hargaDanTenant")).toHaveTextContent(`Rp 20.000,00 - ${props.namatenant}`);
  });
});