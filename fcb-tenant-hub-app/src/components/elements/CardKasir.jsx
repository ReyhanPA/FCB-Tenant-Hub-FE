//import {Link} from "react-router-dom"
import React from 'react';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Axios from 'axios';

const CardKasir = (props) => {
    const {gambar = "gambar1.jpg", namaToko = "toko gaul", tenantid = "id12345"} = props;
    CardKasir.propTypes = {
        gambar: PropTypes.node.isRequired,
        namaToko: PropTypes.string.isRequired,
        tenantid: PropTypes.string.isRequired
    }

    const comfirmDelete = (tenantid) => {
        confirmAlert({
            title: 'Konfirmasi untuk menghapus',
            message: 'Apakah anda yakin menghapus tenant ini?',
            buttons: [
              {
                label: 'Ya',
                onClick: () => {
                    // console.log(tenantid)
                    Axios.delete(`http://localhost:4000/tenant/deletetenant/${tenantid}`)
                    .then(result => {
                        console.log('Success delete : ', result.data);
                        window.location.reload();
                    })
                    .catch(err => {
                            console.log('error : ', err);
                    })
                }
              },
              {
                  label: 'Tidak',
                  onClick: () => console.log("Kasir tidak setuju")
              }
            ]
        });
    }
    
    return (
        <div className="flex justify-between w-full my-1 p-3 bg-white border border-gray-200 rounded-lg shadow">                  
                    {/* Foto Toko */}
                    <div className="flex w-1/5">
                        <img className="h-20" src={gambar} alt={gambar}></img>
                    </div>
                    {/* Nama dan desc toko */}
                    <div className="flex-col w-3/5 mx-2">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{namaToko}</h5>
                    </div>
                    {/* Hapus */}
                    <div className="flex justify-end w-1/5 items-center">
                        <button onClick={() => comfirmDelete(tenantid)} className="inline-flex h-1/2 px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Hapus
                        </button>
                    </div>
                </div>
    )
}

export default CardKasir
