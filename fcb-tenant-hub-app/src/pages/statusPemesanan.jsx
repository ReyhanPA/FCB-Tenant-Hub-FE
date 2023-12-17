import ContentStatusPemesanan from "../components/ContentStatusPemesanan";
import Footer from "../components/Footer";
import NavbarTenantPemesanan from "../components/NavbarTenantPemesanan";

const StatusPemesananPage = () => {
    return (
        <div className='flex flex-col h-screen'>
            <NavbarTenantPemesanan/>
            <ContentStatusPemesanan/>
            <Footer/>
        </div>
    )
};

export default StatusPemesananPage
