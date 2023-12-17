import NavbarPelanggan from "../components/NavbarPelanggan";
import ContentHalamanPembayaran from "../components/ContentHalamanPembayaran";
import Footer from "../components/Footer";

const HalamanPembayaranPage = () => {
    return (
        <div className='flex flex-col h-screen'>
            <NavbarPelanggan/>
            <ContentHalamanPembayaran/>
            <Footer/>
        </div>
    )
};

export default HalamanPembayaranPage