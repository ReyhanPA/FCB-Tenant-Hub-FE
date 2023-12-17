// Import components
import NavbarPelanggan from "../components/NavbarPelanggan";
import ContentDaftarTenant from "../components/ContentDaftarTenant";
import Footer from "../components/Footer";

const DaftarTenantPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#F8EDE3]">
            <NavbarPelanggan/>
            <ContentDaftarTenant/>
            <Footer/>
        </div>
    )
};

export default DaftarTenantPage;