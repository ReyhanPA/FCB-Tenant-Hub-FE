import { useState } from "react";
import Axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const TambahAkunTenant = () => {
    const location=useLocation();
    let idUserLoggedIn
    try {
        idUserLoggedIn = location.state.idUserLoggedIn;    
    } catch (error) {
        alert('anda harus login terlebih dahulu')
        window.location = '/Login';
    }

    const [namatenant, setNamatenant] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    
    const navigate = useNavigate()

    const onSubmit = () => {

        console.log('nama tenant : ', namatenant);
        console.log('username : ', username);
        console.log('password : ', password);
        console.log('image', image);

        const data = new FormData();
        data.append('namatenant', namatenant);
        data.append('username', username);
        data.append('password', password);
        data.append('image', image);

        Axios.post('http://localhost:4000/tenant/createtenant', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log('Post Success : ', res);
        })
        .catch(err => {
            console.log('Err : ', err);
        })

        navigate('/kelolaakuntenant', {state:{idUserLoggedIn:idUserLoggedIn}});
    }

    const back = () => {
        navigate('/kelolaakuntenant', {state:{idUserLoggedIn:idUserLoggedIn}});
    }

    return (
        <div className ='bg-[#F8EDE3] h-full'>            
            <form>
                <div className="flex-row mx-32 my-3">
                    
                    <div className="text-[#798777] flex my-3 font-bold text-xl">
                        <button onClick={back} className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </button>Tambah Tenant
                    </div>

                    {/* Form */}
                    <div className="w-full">
                        <label className="flex mb-2 text-lg font-bold text-[#798777]">Masukkan Nama Tenant<p className="text-red-400">*</p></label>
                        <input value={namatenant} onChange={(e) => setNamatenant(e.target.value)} type="text" id="namaTenant" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Nama tenant" required></input>
                    </div>
                    <div className="w-full my-3">
                        <label className="flex mb-2 text-lg font-bold text-[#798777]">Masukkan Foto Profil Tenant<p className="text-red-400">*</p></label>
                            <input onChange={(e) => setImage(e.target.files[0])} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" id="fotoTenant" type="file" accept="image/*"/>
                    </div>
                    <div className="w-full">
                        <label className="flex mb-2 text-lg font-bold text-[#798777]">Masukkan Username Tenant<p className="text-red-400">*</p></label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="namaTenant" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Username" required></input>
                    </div>
                    <div className="w-full">
                        <label className="flex mb-2 text-lg font-bold text-[#798777]">Masukkan Password Tenant<p className="text-red-400">*</p></label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" id="namaTenant" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Password"required></input>
                    </div>

                    {/* Tombol Simpan Tenant */}
                    <div>
                        <button onClick={onSubmit} className="inline-flex px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Simpan Tenant
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TambahAkunTenant