var mobil = ["Avanza","Yaris","Alya"]

//mengambil satu element
mobil[1] = "Yaris"

//mengisi element
mobil.push("Veloz")

//Element array yang kosong

var arrayKosong = [];

//Mencetak semua elemen pada array dengan console log dan pengulangan for

var mobil = ["Avanza","Yaris","Alya"]

for(let i=0;i<mobil.length;i++){

   console.log('Cetak mobil ke-' + i + ": " + mobil[i])

}

//Menghapus elemen array dengan metode delete

delete mobil[3]

//Menghapus elemen paling belakang dengan metode pop()

mobil.pop()

//Sedangkan jika ingin menghapus elemen paling depan dengan metode shift()

mobil.shift()