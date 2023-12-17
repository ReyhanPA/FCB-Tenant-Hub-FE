# **FCB Tenant Hub**

## **Tentang FCB Tenant Hub**
**FCB Tenant Hub** merupakan sebuah *website* sebuah *food court* bersama yang digunakan untuk memudahkan pelanggan melakukan pemesanan makanan dan minuman dari beberapa *tenant* sekaligus dan membayar pada satu pintu pembayaran yang sama. *Website* ini selain memudahkan pelanggan juga memudahkan *tenant* dalam mendata pemesanan dan kasir dalam mendata keuangan. Dalam *website* ini terdapat 3 *role* yang dapat tersedia, yaitu **pelanggan**, ***tenant***, dan juga **kasir** sebagai admin.

## **Developer Terlibat**
| NIM | Nama | Bagian Implementasi |
| --- | ---- | ------------------- |
| Muhammad Shulhan | 18221051 | UC-01 & UC-04 |
| Arifuddin Achmad Subagja | 18221127 | UC-05 & UC-06 |
| Reyhan Putra Ananda | 18221161 | UC-02 & UC-03 |
| Ananda Abdul Hafizh| 18221167 | UC-07 & UC-08 |

## **Nama Use Case**
- UC-01 : Login (Semua Role)
- UC-02 : Melihat Daftar Tenant (Pelanggan)
- UC-03 : Melihat Daftar Menu (Pelanggan)
- UC-04 : Melakukan Pemesanan dan Generate Kode Unik (Pelanggan)
- UC-05 : Mengelola Akun Tenant (Kasir)
- UC-06 : Mencetak Bill (Kasir)
- UC-07 : Melihat Daftar Menu (Tenant)
- UC-08 : Melihat Daftar Pesanan (Tenant)

## **Capture Screen Tampilan**
1. **Login**
   ![Login](/fcb-tenant-hub-app/public/assets/Login.PNG)
2. **Memasukkan Nomor Meja**
   ![Mamsukkan Nomor Meja](/fcb-tenant-hub-app/public/assets/Memasukkan-Nomor-Meja.PNG)
3. **Daftar Tenant**
   ![Daftar Tenant](/fcb-tenant-hub-app/public/assets/Daftar-Tenant.PNG)
4. **Daftar Menu**
   ![Daftar Menu](/fcb-tenant-hub-app/public/assets/Daftar-Menu.PNG)
5. **Review Menu**
   ![Review Menu](/fcb-tenant-hub-app/public/assets/Review-Menu.PNG)
6. **Halaman Pembayaran**
   ![Halaman Pembayara](/fcb-tenant-hub-app/public/assets/Halaman-Pembayaran.PNG)
7. **Kelola Akun Tenant**
   ![Kelola Akun Tenant](/fcb-tenant-hub-app/public/assets/Kelola-Akun-Tenant.PNG)
8. **Tambah Akun Tenant**
   ![Tambah Akun Tenant](/fcb-tenant-hub-app/public/assets/Tambah-Akun-Tenant.PNG)
9.  **Cetak Bill**
    ![Cetak Bill](/fcb-tenant-hub-app/public/assets/Cetak-Bill.PNG)
10. **Daftar Menu Tenant**
    ![Daftar Menu Tenant](/fcb-tenant-hub-app/public/assets/Daftar-Menu-Tenant.PNG)
11. **Tambah Menu**
    ![Tambah Menu](/fcb-tenant-hub-app/public/assets/Tambah-Menu.PNG)
12. **Status Pemesanan**
    ![Status Pemesanan](/fcb-tenant-hub-app/public/assets/Status-Pemesanan.PNG)
13. **Dummy (Untuk Use Case yang Tidak Diimplementasikan)**
    ![Dummy](/fcb-tenant-hub-app/public/assets/Dummy.PNG)

## **Daftar Basis Data**
Pada implementasi *website* FCB Tenant Hub ini, kami menggunakann *stack* MERN, yaitu kombinasi dari **MongoDB** sebagai *database*, **ExpressJS** sebagai router *back-end*, **ReactJS** sebagai *library front-end*, dan **NodeJS** sebagai *library back-end*. Oleh karena itu, kami menggunakan NoSQL sebagai *database*. Untuk strukturnya sendiri sebagai berikut:

1. **Authentication**
   - _id : ObjectId
   - username : String
   - password : String
2. **Menu**
   - _id : ObjectId
   - idtenant : String
   - namatenant : String
   - namamenu : String
   - image : String
   - deskripsi : String
   - stok : Number
   - harga : Number
3. **Pesanan**
   - _id : ObjectId
   - listmenu : Array of object
       - idtenant : String
       - namatenant : String
       - namamenu : String
       - harga : Number
       - jumlah : Number
       - statuspesanan : String
4. **Tenant**
   - _id : ObjectId
   - namatenant : String
   - image : String
   - username : String
   - password : String

## **Catatan**
*Testing* yang digunakan adalah *unit testing* untuk card yang ada pada *front-end* saja. Sedangkan *integration testing* untuk mencoba *endpoint* dapat dites melalui *collection* postmant (file collection ada pada folder docs di repository *backend*)