console.log("Biodata")

// Exercise Variable
var name = "Ade Rio Saputra";
console.log(name);

var age = 22
console.log(age);

var university = "Institut Teknologi Sumatera"
console.log(university);

var citizen = "Lampung"
console.log(citizen);

//Exercise Function
function Animal (name, type = "Mamalia") {
    // penggunaan string literal atau ' ketika ingin menggunakan variabel/parameter harus dengan${}
   return `${name} merupakan binatang dari jenis ${type}`;
}

const greeting = Animal("Paus", "Mamalia"); // => jika function memiliki keywords return didalamnya bisa menggunakan variable

console.log(greeting);

// Exercise Loop
const teman = ["Ghaza", "Reyhan", "Fatur","Afif","Lia"]
for (let i =0; i < teman.length; i++) {
    console.log(teman[i]);
}

console.log("Perulangan Berhasil");

// Exercise Class
class Mahasiswa {
    constructor(name, dapartement) {
      this._name = name;
      this._dapartement = dapartement;
    }

    information() {
        return `Hallo, nama saya ${this.name} dan saya dari jurusan ${this._dapartement}.`;
    }
    //Ini adalah setter untuk merubah nilai dari sebuah property
    setName(name) {
        this._name = name;
    }

    //Ini adalah setter untuk mengambil data dari sebuah
    getName() {
        return this.name;
    }

    //Ini merupakan contoh penggunaan setter dengan keyword set
    set name(value) {
        if (value !== "") {
            this._name = value;
        } else {
            console.log("The value must be not  empty string.");
        }
    }

    //Ini merupakan contoh penggunaan getter dengan keyword get
    get name() {
        return this._name;
    }
}

const mahasiswa = new Mahasiswa("Ade Rio Saputra", "Teknik Geomatika");
console.log(mahasiswa.information());
