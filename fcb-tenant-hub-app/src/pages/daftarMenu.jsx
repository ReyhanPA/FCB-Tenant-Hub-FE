// Import components
import NavbarPelanggan from "../components/NavbarPelanggan";
import ContentDaftarMenu from "../components/ContentDaftarMenu";
import Footer from "../components/Footer";

const DaftarMenuPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#F8EDE3]">
            <NavbarPelanggan/>
            <ContentDaftarMenu/>
            <Footer/>
        </div>
    )
};

export default DaftarMenuPage;