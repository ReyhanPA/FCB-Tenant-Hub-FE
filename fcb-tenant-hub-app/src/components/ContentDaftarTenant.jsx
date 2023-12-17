// import React from "react";
import { useEffect, useState } from "react"
import Axios from "axios"
import CardTenant from "./elements/CardTenant"
import { useLocation, useNavigate } from "react-router-dom"

const ContentDaftarTenant = () => {
    const location=useLocation();
    let nomormeja
    try {
        nomormeja = location.state.nomormeja;    
    } catch (error) {
        alert('anda harus memasukkan nomor meja terlebih dahulu')
        window.location = '/MemasukkanNomorMeja';
    }
    const history=useNavigate();

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
        <div className="flex justify-center items-center w-screen min-h-full mb-auto x-w-[1920px] mx-auto py-4 px-4">
                <div className="kontainer min-h-full w-[1150px] flex-wrap bg-[#BDD2B6] rounded-lg border border-[#8ea686] pb-5">
                    <h1 className="flex justify-center text-3xl font-bold pt-5">Jelajah Tenant</h1>
                    <div className="kontainer-card flex justify-center flex-row flex-wrap px-2.5">
                        {tenants.map((tenant) => (
                            <CardTenant gambar={`http://localhost:4000/${tenant.image}`} tautan={`/daftarmenu/${tenant._id}`} nomormeja={nomormeja} key={tenant._id}>{tenant.namatenant}</CardTenant>
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default ContentDaftarTenant