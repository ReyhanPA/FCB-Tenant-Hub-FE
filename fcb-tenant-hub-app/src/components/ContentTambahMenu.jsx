//import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Konten = () => {
    const location=useLocation();
    let idUserLoggedIn
    try {
        idUserLoggedIn = location.state.idUserLoggedIn;    
    } catch (error) {
        alert('anda harus login terlebih dahulu')
        window.location = '/Login';
    }
    const history=useNavigate();

    const [name, setName] = useState('')
    const [harga, setHarga] = useState('')
    const [stok, setStok] = useState('')
    const [deskripsi, setDeskripsi] = useState('')
    const [gambar, setGambar] = useState('')

    let namaTenant = 'masih salah'

    axios.get('http://localhost:4000/tenant/readtenant')
    .then(result => {
        console.log('data API', result.data);
        const responseAPI = result.data;
        for (let i=0; i<responseAPI.data.length; i++) {
            if (responseAPI.data[i]._id === idUserLoggedIn) {
                namaTenant = responseAPI.data[i].namatenant
            }
        }
    })
    .catch(err => {
        console.log('error : ', err);
    })
    
    const onSubmit = () => {

        console.log('idtenant', idUserLoggedIn);
        console.log('namatenant', namaTenant);
        console.log('namamenu', name);
        console.log('image', gambar);
        console.log('deskripsi', deskripsi);
        console.log('stok', stok);
        console.log('harga', harga);

        const data = new FormData();
        data.append('idtenant', idUserLoggedIn);
        data.append('namatenant', namaTenant);
        data.append('namamenu', name);
        data.append('image', gambar);
        data.append('deskripsi', deskripsi);
        data.append('stok', stok);
        data.append('harga', harga);

        axios.post('http://localhost:4000/menu/createmenu', data, {
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

        history(`/daftarmenutenant/${idUserLoggedIn}`, {state:{idUserLoggedIn:idUserLoggedIn}})
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-[#F8EDE3]">
            <h1 className="text-center mt-[px] mb-[30px] font-bold text-2xl text-[#798777]">Tambah Menu</h1>
            <div className="w-1/2">
                <div className="mb-4">
                    <label className="block nb-1 font-bold text-[#798777] text-lg">Nama Menu :</label>
                    <input
                    id="name" 
                    type="text"
                    className="border border-gray-400 py-2 px-4 w-full" 
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block nb-1 font-bold text-[#798777] text-lg">Harga :</label>
                    <input 
                    id ="harga"
                    type="text"
                    className="border border-gray-400 py-2 px-4 w-full" 
                    onChange={(e) => setHarga(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block nb-1 font-bold text-[#798777] text-lg">Jumlah Stok Tersedia :</label>
                    <input 
                    id ="stok"
                    type="text"
                    className="border border-gray-400 py-2 px-4 w-full" 
                    onChange={(e) => setStok(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block nb-1 font-bold text-[#798777] text-lg">Deskripsi :</label>
                    <input 
                    id ="deskripsi"
                    type="text"
                    className="border border-gray-400 py-2 px-4 w-full" 
                    onChange={(e) => setDeskripsi(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block nb-1 font-bold text-[#798777] text-lg">Gambar :</label>
                    <input 
                    id ="gambar"
                    type="file"
                    accept="image/*"
                    className="border border-gray-400 py-2 px-4 w-full" 
                    onChange={(e) => setGambar(e.target.files[0])}
                    />
                </div>
                <div>
                    <button onClick={onSubmit} className="bg-[#C66666] py-2 px-4 font-bold rounded text-white hover:bg-[#a95555]">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Konten;