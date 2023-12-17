import NavbarTenantMenu from "../components/NavbarTenantMenu";
import ContentMenuTenant from "../components/ContentMenuTenant";
import Footer from "../components/Footer";

const MelihatDaftarMenuTenantPage = () => {
    return (
        <div className='flex flex-col h-screen'>
            <NavbarTenantMenu/>
            <ContentMenuTenant/>
            <Footer/>
        </div>
    )
}

export default MelihatDaftarMenuTenantPage;