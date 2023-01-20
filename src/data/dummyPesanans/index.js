import {
    Bmw,
    bmwm81,
    bmwm82,
    bmw4series1,
    bmw4series2,
  } from '../../assets';
  
  export const dummyPesanans = [
    {
      id: 1,
      tanggalPemesanan: 'Jumat, 18 September 2020',
      status: 'keranjang',
      totalHarga: 500000,
      pesanans: [
        {
          id: 1,
          product: {
            id:1,
            nama: "BMW 4-series",
            gambar:[bmw4series1,bmw4series2],
            merk: {
                id:3,
                nama: 'BMW',
                gambar: Bmw
    
            },
            harga : 500000,
            jenis : 'Second',
            durasi:["1","3","7"],
            ready: true    
          },
          jumlahPesan: 1,
          totalHarga: 125000,
          keterangan: null,
          durasi: "1"
        },
        {
          id: 2,
          product: {
            id:2,
            nama: "BMW M8",
            gambar:[bmwm81,bmwm82],
            merk: {
                id:3,
                nama: 'BMW',
                gambar: Bmw

            },
            harga : 700000,
            jenis : 'Second',
            durasi:["1","3","7"],
            ready: true
          },
          jumlahPesan: 1,
          totalHarga: 375000,
          keterangan: null,
          durasi: "3"
        }
      ]
    },
    {
        id: 2,
        tanggalPemesanan: 'Jumat, 18 September 2020',
        status: 'lunas',
        totalHarga: 500000,
        pesanans: [
          {
            id: 1,
            product: {
              id:1,
              nama: "BMW 4-series",
              gambar:[bmw4series1,bmw4series2],
              merk: {
                  id:3,
                  nama: 'BMW',
                  gambar: Bmw
      
              },
              harga : 500000,
              jenis : 'Second',
              durasi:["1","3","7"],
              ready: true    
            },
            jumlahPesan: 1,
            totalHarga: 125000,
            keterangan: null,
            durasi: "1"
          },
          {
            id: 2,
            product: {
              id:2,
              nama: "BMW M8",
              gambar:[bmwm81,bmwm82],
              merk: {
                  id:3,
                  nama: 'BMW',
                  gambar: Bmw
  
              },
              harga : 700000,
              jenis : 'Second',
              durasi:["1","3","7"],
              ready: true
            },
            jumlahPesan: 1,
            totalHarga: 375000,
            keterangan: null,
            durasi: "3"
          }
        ]
      }
  ];
  