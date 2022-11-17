//fungsi biasa
function namaFungsi1(){

    console.log("Hello World!");
 
}

//fungsi ekspresi
var namaFungsi2 = function(){

    console.log("Hello World!");
 
}

//fungsi dengan tanda panah
var namaFungsi3 = () => {

    console.log("Hello World!");
 
 }
 
// atau seperti ini (jika isi fungsi hanya satu baris):
var namaFungsi = () => console.log("Hello World!");

//fungsi konstruktor
var namaFungsi = new Function('console.log("Hello World!");');


// membuat fungsi
function sayHello(){

    console.log("Hello World!");
 
}
// memanggil fungsi
 
sayHello() // maka akan  menghasilkan -> Hello World!
