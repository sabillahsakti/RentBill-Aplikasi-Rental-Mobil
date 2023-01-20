import {bmw4series1,
    bmw4series2,
    bmwm81,
    bmwm82,
    brio1,
    brio2,
    civic1,
    civic2,
    a2001,
    a2002,
    amg1,
    amg2,
    agya1,
    agya2,
    alphard1,
    alphard2,
    Bmw,Toyota,Honda,Mercedes} from '../../assets'

export const dummyCars = [
    {
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
    {
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
    {
        id:3,
        nama: "Brio",
        gambar:[brio1,brio2],
        merk: {
            id:1,
            nama: 'Honda',
            gambar: Honda

        },
        harga : 300000,
        jenis : 'Second',
        durasi:["1","3","7"],
        ready: true
    },
    {
        id:4,
        nama: "Civic",
        gambar:[civic1,civic2],
        merk: {
            id:1,
            nama: 'Honda',
            gambar: Honda

        },
        harga : 350000,
        jenis : 'Second',
        durasi:["1","3","7"],
        ready: true
    },
    {
        id:5,
        nama: "A 200",
        gambar:[a2001,a2002],
        merk: {
            id:2,
            nama: 'Mercedes Benz',
            gambar: Mercedes

        },
        harga : 400000,
        jenis : 'Second',
        durasi:["1","3","7"],
        ready: true
    },
    {
        id:6,
        nama: "AMG A35",
        gambar:[amg1,amg2],
        merk: {
            id:2,
            nama: 'Mercedes Benz',
            gambar: Mercedes

        },
        harga : 450000,
        jenis : 'Second',
        durasi:["1","3","7"],
        ready: false
    },
    {
        id:7,
        nama: "Agya",
        gambar:[agya1,agya2],
        merk: {
            id:4,
            nama: 'Toyota',
            gambar: Toyota

        },
        harga : 250000,
        jenis : 'Second',
        durasi:["1","3","7"],
        ready: true
    },
    {
        id:8,
        nama: "Alphard",
        gambar:[alphard1,alphard2],
        merk: {
            id:4,
            nama: 'Toyota',
            gambar: Toyota

        },
        harga : 600000,
        jenis : 'Second',
        durasi:["1","3","7"],
        ready: true
    },
]