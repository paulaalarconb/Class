class Usuario {

    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName (){
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(nombre){
        this.mascotas.push(nombre);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor})
    }

    getBookNames(){
        return this.libros.map(el=>el.nombre);
    }

}

const isa = new Usuario("Paula", "Alarcon", [{nombre:"Memorias de mis putas tristes", autor: "G.G Márquez"}],["Perlita"])

isa.getFullName();
isa.addMascota("Dora");
isa.countMascotas();
isa.addBook("1984", "George Orwell");
isa.getBookNames();

// console.log(isa)
// console.log(isa.getFullName())
// console.log(isa.countMascotas())
// console.log(isa.getBookNames())