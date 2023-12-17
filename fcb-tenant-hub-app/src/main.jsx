// Import library
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// Import pages
import LoginPage from './pages/Login';
import DumpCekStatusPage from './pages/dumpcekstatus';
import MemasukkanNomorMejaPage from './pages/memasukkanNomorMeja';
import DaftarTenantPage from './pages/daftarTenant';
import DaftarMenuPage from './pages/daftarMenu';
import ReviewMenuPage from './pages/ReviewMenu';
import HalamanPembayaranPage from './pages/HalamanPembayaran';
import KelolaAkunTenantPage from './pages/kelolaAkunTenant';
import CetakBillPage from './pages/cetakBill';
import SearchBillPage from './pages/searchBill';
import DumpKasirPage from './pages/dumpKasir';
import StatusPemesananPage from './pages/statusPemesanan';
import MelihatDaftarMenuTenantPage from './pages/melihatDaftarMenuTenant';
import TambahAkunTenantPage from './pages/tambahAkunTenant';
import TambahMenuPage from './pages/tambahMenu';

const router = createBrowserRouter([
  // Menuju page login (kasir/tenant)
  {
    path: "/login",
    element: <LoginPage />,
  },
  // Menuju page login (kasir/tenant)
  {
    path: "/cekstatus",
    element: <DumpCekStatusPage />,
  },
  // Menuju page memasukkan nomor meja (pelanngan)
  {
    path: "/memasukkannomormeja",
    element: <MemasukkanNomorMejaPage />,
  },
  // Menuju page daftar tenant (pelanggan)
  {
    path: "/daftartenant",
    element: <DaftarTenantPage />,
  },
  // Menuju page daftar menu (pelanggan)
  {
    path: "/daftarmenu/:tenantid",
    element: <DaftarMenuPage />,
  },
  {
    path: "/kelolaakuntenant",
    element: <KelolaAkunTenantPage/>
  },
  {
    path: "/cetakbill/:pesananid",
    element: <CetakBillPage/>
  },
  {
    path: "/cetakbill/",
    element: <SearchBillPage/>
  },
  {
    path: "/riwayatpemesanan",
    element: <DumpKasirPage/>
  },
  // Menuju page ReviewMenu
  {
    path: "/reviewmenu/:pesananid",
    element: <ReviewMenuPage />,
  },
  // Menuju page HalamanPembayaran
  {
    path: "/halamanpembayaran/:pesananid",
    element: <HalamanPembayaranPage />,
  },
  // Menuju page StatusPemesanan
  {
    path: "/statuspemesanan",
    element: <StatusPemesananPage />,
  },
  // Menuju page MelihatDaftarMenuTenant
  {
    path: "/daftarmenutenant/:tenantid",
    element: <MelihatDaftarMenuTenantPage />,
  },
  // Menuju page TambahAkunTenant
  {
    path: "/tambahakuntenant",
    element: <TambahAkunTenantPage />,
  },
  {
    path: "/tambahmenu",
    element: <TambahMenuPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
