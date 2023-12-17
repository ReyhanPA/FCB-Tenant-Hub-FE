import NavbarKasirMengelolaAkunTenant from "../components/NavbarKasirMengelolaAkunTenant";
import ContentTambahAkunTenant from "../components/ContentTambahAkunTenant";
import Footer from "../components/Footer";

const TambahAkunTenantPage = () => {
    
    return (
        <div className="flex flex-col h-screen">
            <NavbarKasirMengelolaAkunTenant/>
            <ContentTambahAkunTenant/>
            <Footer/>
        </div>
        )
};

export default TambahAkunTenantPage;