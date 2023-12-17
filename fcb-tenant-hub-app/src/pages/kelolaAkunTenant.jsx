import NavbarKasirMengelolaAkunTenant from "../components/NavbarKasirMengelolaAkunTenant";
import ContentMengelolaAkunTenant from "../components/ContentMengelolaAkunTenant";
import Footer from "../components/Footer";

const KelolaAkunTenantPage = () => {
    
    return (
        <div className="flex flex-col h-screen">
            <NavbarKasirMengelolaAkunTenant/>
            <ContentMengelolaAkunTenant/>
            <Footer/>
        </div>
        )
};

export default KelolaAkunTenantPage;