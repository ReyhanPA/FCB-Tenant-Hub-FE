import { useLocation, useNavigate } from 'react-router-dom';

const NavbarTenantPemesanan = () => {
    const location=useLocation();
    let idUserLoggedIn
    try {
        idUserLoggedIn = location.state.idUserLoggedIn;    
    } catch (error) {
        alert('anda harus login terlebih dahulu')
        window.location = '/Login';
    }
    const history=useNavigate();
    const button1 = () => {
        history(`/daftarmenutenant/${idUserLoggedIn}`, {state:{idUserLoggedIn:idUserLoggedIn}});
    }

    return (
        <div className ='flex justify-between px-10 items-center h-24 max-w-[1920px] bg-[#F8EDE3] my-[10px]'>
            <button className='rounded-full mx-5 py-1 w-full text-3xl font-bold text-[#798777] bg-[#FFFFFF] border-[#A2B29F] border-2 shadow-md shadow-[#798777] hover:bg-[#cccccc]'>Profil</button>
            <button onClick={button1} className='rounded-full mx-5 py-1 w-full text-3xl font-bold text-[#798777] bg-[#FFFFFF] border-[#A2B29F] border-2 shadow-md shadow-[#798777] hover:bg-[#cccccc]'>Menu</button>
            <button className='rounded-full mx-5 py-1 w-full text-3xl font-bold text-[#798777] bg-[#FFFFFF] border-[#A2B29F] border-2 shadow-md shadow-[#798777] hover:bg-[#cccccc]'>Penjualan</button>
            <button className='rounded-full mx-5 py-1 w-full text-3xl font-bold text-[#FFFFFF] bg-[#C66666] border-[#883C3C] border-2 shadow-md shadow-[#D18A8A] hover:bg-[#773d3d]'>Pemesanan</button>
        </div>
    )
}

export default NavbarTenantPemesanan