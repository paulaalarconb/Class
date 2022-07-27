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

const pau = new Usuario("Paula", "Alarcon", [{nombre:"Memorias de mis putas tristes", autor: "G.G Márquez"}],["Perlita"])

pau.getFullName();
pau.addMascota("Dora");
pau.countMascotas();
pau.addBook("1984", "George Orwell");
pau.getBookNames();

// console.log(pau)
// console.log(pau.getFullName())
// console.log(pau.countMascotas())
// console.log(pau.getBookNames())