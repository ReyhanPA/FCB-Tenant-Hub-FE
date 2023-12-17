//import React from "react"; 
//import { Link } from "react-router-dom";
import Axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContentMemasukkanNomorMeja = () => {
    const navigate = useNavigate();
    const [listMeja, setMeja] = useState([]);


        Axios.get('http://localhost:4000/pesanan/readpesanan')
        .then(result => {
            console.log('data API', result.data);
            const responseAPI = result.data;
            for (let i=0; i<responseAPI.data.length; i++) {
                if (listMeja.indexOf(String(responseAPI.data[i].nomormeja)) === -1){
                    listMeja.push(String(responseAPI.data[i].nomormeja));
                }
            }
        })
        .catch(err => {
            console.log('error : ', err);
        })


    console.log('listMeja', listMeja)
    const [nomormeja, setNomorMeja] = useState('')
    const isMejaTerisi = listMeja.includes(String(nomormeja))

    const onSubmit = () =>{
        if (nomormeja<1 || nomormeja>10) {
            alert('Input nomor meja harus di antara 1-10')
        } else {
            if (isMejaTerisi){
                alert('meja sudah terisi')
            } else {
                const data = new FormData();

                let emptyObject = '[]';
                data.append('nomormeja', nomormeja);
                data.append('listmenu', JSON.parse(emptyObject));
                data.append('hargatotal', 0);
                data.append('statuspesanan', 'pending');

                Axios.post('http://localhost:4000/pesanan/pesan', data, {
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


                navigate('/daftartenant', {state:{nomormeja:nomormeja}})
            }
        }


        // history(`/daftarmenutenant/${idUserLoggedIn}`, {state:{idUserLoggedIn:idUserLoggedIn}})
    }

    return (
        <div className ='flex justify-center align items-center h-full ph-16 px-4 bg-[#F8EDE3]'>
            <div className ='h-96 w-96 bg-[#BDD2B6]'>
                <div className='my-4 flex justify-center align items-center mb-16'>
                    <h1 className='text-2xl font-bold text-[#000000]'>Pilih Meja</h1>
                </div>
                {/* <div className='my-8 flex justify-center'>
                    <button className='mx-2 h-14 w-14 bg-[#F8EDE3] focus:bg-green-700'>1</button>
                    <button className='mx-2 h-14 w-14 bg-[#F8EDE3] focus:bg-green-700'>2</button>
                    <button className='mx-2 h-14 w-14 bg-[#F8EDE3] focus:bg-green-700'>3</button>
                    <button className='mx-2 h-14 w-14 bg-[#F8EDE3] focus:bg-green-700'>4</button>
                    <button className='mx-2 h-14 w-14 bg-[#F8EDE3] focus:bg-green-700'>5</button>
                </div>
                <div className='flex justify-center'>
                    <button className='mx-2 h-14 w-14 bg-[#F8EDE3] focus:bg-green-700'>6</button>
                    <button className='mx-2 h-14 w-14 bg-[#F8EDE3] focus:bg-green-700'>7</button>
                    <button className='mx-2 h-14 w-14 bg-[#F8EDE3] focus:bg-green-700'>8</button>
                    <button className='mx-2 h-14 w-14 bg-[#F8EDE3] focus:bg-green-700'>9</button>
                    <button className='mx-2 h-14 w-14 bg-[#F8EDE3] focus:bg-green-700'>10</button>
                </div>
                <div className='my-6 flex justify-center'>
                    <p className='text-sm font-semibold'>Keterangan : Hijau artinya Anda memilih no meja tersebut</p>
                </div> */}
                <div className="flex flex-col justify items-center mb-16">
                    <label className="block nb-1 font-bold text-[#798777] text-lg">Nomor Meja (1-10):</label>
                    <input
                    id="nomormeja" 
                    type="number"
                    className=" border border-gray-400 py-2 w-[300px] text-center" 
                    onChange={(e) => setNomorMeja(e.target.value)}
                    />
                </div>
                <div className='flex justify-center align items-center'>
                    <button onClick={onSubmit} className='rounded-full h-10 w-36 text-2xl font-bold border-[#8a8a8a] text-[#798777] bg-[#F8EDE3] shadow-md shadow-[#798777] hover:bg-[#e3d9d0]'>Submit</button>
                </div>
                <div className='my-3 flex justify-center align items-center'>
                    <a href="Login" className='text-sm font-semibold hover:font-bold'>Karyawan? Klik ini</a>
                </div>
            </div>
        </div>
    )
}

export default ContentMemasukkanNomorMeja