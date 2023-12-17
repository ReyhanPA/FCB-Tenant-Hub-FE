import { useState} from "react";
import { useNavigate ,useLocation } from "react-router-dom";

const ContentSearchBill = () => {
    const location=useLocation();
    let idUserLoggedIn
    try {
        idUserLoggedIn = location.state.idUserLoggedIn;    
    } catch (error) {
        alert('anda harus login terlebih dahulu')
        window.location = '/Login';
    }
    const navigate = useNavigate();
    const [idPesanan, setIdPesanan] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/cetakbill/${idPesanan}`,{state:{idUserLoggedIn:idUserLoggedIn}});
    };

    return (
        <div className ='bg-[#F8EDE3] h-full'>
            <h1 className='my-2 text-2xl font-bold text-[#798777] ml-10'>Cari Nomor Pesanan</h1>
            <div>     
                {/* Input search form */}
                <form className="flex justify-center mx-10" onSubmit={handleSubmit}>   
                    <label className="sr-only">Search</label>
                    <div className="relative w-full">
                        {/* Icon sebelah tulisan dalam input boks */}
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                            </svg>
                        </div>
                        <input type="text" id="simple-search" value={idPesanan} onChange={(e) => setIdPesanan(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Masukkan kode unik" required></input>
                    </div>
                    {/* Icon search */}
                    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>
            </div>

        </div>
    )
}

export default ContentSearchBill