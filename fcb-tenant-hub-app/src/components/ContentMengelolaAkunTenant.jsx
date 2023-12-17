//import React from "react";
import CardKasir from "./elements/CardKasir";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ContentMengelolaAkunTenant = () => {
    const location=useLocation();
    let idUserLoggedIn
    try {
        idUserLoggedIn = location.state.idUserLoggedIn;    
    } catch (error) {
        alert('anda harus login terlebih dahulu')
        window.location = '/Login';
    }
    const history=useNavigate();

    async function submit(e){
        e.preventDefault();

        history('/tambahakuntenant',{state:{idUserLoggedIn:idUserLoggedIn}})
    }

    //Mengatur tenant
    const [tenants, setTenants] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:4000/tenant/readtenant')
        .then(result => {
            console.log('data API', result.data);
            const responseAPI = result.data;
            setTenants(responseAPI.data);
        })
        .catch(err => {
            console.log('error : ', err);
        })
    }, [])

    return (
        <div className ='bg-[#F8EDE3] h-full'>
                
                {/* Card */}
                <div className="flex ml-60 mr-[287px] h-[340px] mt-1 flex-col overflow-y-auto">
                    {/* namaTenant Iterasi */}
                    {tenants.map((tenant) => (
                            <CardKasir key={tenant._id} tenantid={tenant._id} gambar={`http://localhost:4000/${tenant.image}`} namaToko={tenant.namatenant}></CardKasir>
                    ))}
                </div>
            
            {/* Menambah menu  */}
            <div className="flex justify-end mx-32">
                {/* <button type="button" className="absolute px-2 py-2 rounded-lg border-2 text-[#A2B29F] text-base font-semibold border-[#A2B29F] bg-white hover:bg-[#cccccc] ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Tambah tenant</button> */}
                <button onClick={submit} className="flex w-auto absolute border-[#A2B29F] border-2 bg-white hover:bg-[#cccccc] font-semibold text-[#798777] rounded-lg p-2 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Tambah Tenant</button>
            </div> 
        </div>
    )
}

export default ContentMengelolaAkunTenant