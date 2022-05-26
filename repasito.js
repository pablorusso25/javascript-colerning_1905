/**
 *  Código del colearning del 26/05. Consigna de la tarea:
 *  a) Completar los métodos eliminarUnidad y calcularTotal.
 *  b) Crear de 3 a 6 instancias de artículos (las que tengan ganas).
 *  c) Crear 1 o las que quieran instancias de carritos y luego:
 *   (1) Rellenarlas por completo. (2) Calcular el valor total del carrito
 *   (3) Eliminar un articulo.  (4) Volver a calcular el valor total del carrito
 * 
 *  Recuerden que podemos usar el canal para preguntarnos y respondernos entre todos!!
 *  Segun Glasser aprendemos un 95% más al enseñarles a otros (: Les dejo la piramide de 
 *  Glasser (ni idea quien era pero hizo una piramide 😂😂, broma, era un psiquiatra) en el repo.
 *  Tambien el planteo hecho en clase.
 */

class Articulo{
    constructor(nombre, valor, cantidad){
        this.nombre = nombre,
        this.valor = valor,
        this.cantidad = cantidad
       // this.propiedad = 'Siempre valgo lo mismo'
    }
}

class CarritoDeCompras{
    constructor(unidad1, unidad2, unidad3, unidad4){
        this.unidad1 = unidad1,
        this.unidad2 = unidad2,
        this.unidad3 = unidad3,
        this.unidad4 = unidad4
    }

    //Aca debajo irian los metodos
    agregarUnidad(unidadParametro){
        if(this.unidad1 === null){
            this.unidad1 = unidadParametro;
        } else if(this.unidad2 === null){
            this.unidad2 = unidadParametro;
        } else if(this.unidad3 === null){
            this.unidad3 = unidadParametro;
        } else if(this.unidad4 === null){
            this.unidad4 = unidadParametro;
        }
    }
    eliminarUnidad(unidadParametro){
        //Completar la tarea!!
    }
    calcularTotal(){
        //Completar la tarea!!
    }
}

//Creo las INSTANCIAS de la clase Articulo
const articulo1 = new Articulo('detergente', 150, 2);
const articulo2 = new Articulo('esponja', 5, 5);
const articulo3 = new Articulo('fosforos', 90, 1);
const articulo4 = new Articulo('Papel de cocina', 110, 3);
console.log(articulo1);
console.log(articulo2);

//Creo un carrito
const miPrimerCarrito = new CarritoDeCompras(articulo1, articulo2, null, null)

miPrimerCarrito.agregarUnidad(articulo3);
miPrimerCarrito.agregarUnidad(articulo4);

console.log(miPrimerCarrito);
