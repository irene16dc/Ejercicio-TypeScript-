import { Persona } from './Persona';


// registros de persona 
var persona1 = new Persona("Paula", "Fernadez", 20, "15789456D", "11-5-95", "azul", "F", [], [], [], "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
var persona2 = new Persona("Pablo", "Garcia", 25, "457869F", "20-4-90", "morado", "M", [], [], [], "Pellentesque eget elit a urna sagittis vestibulum.");
var persona3 = new Persona("Andrea", "Perez", 30, "4956735Q", "15-10-97", "verde", "F", [], [], [], "Sed quis magna lobortis, mattis arcu in, malesuada massa.");



/**   Rellenar Telefono , Direccion  y Mail  */
//registro1
persona1.rellenarDireccion("Rambla Catalunya", 25, 1, "A", 1597, "Badajoz", "Badajoz");
persona1.rellenarMail("gmail", "paula@gmail.com");
persona1.rellenarTelefono("movil", 457891254);
//registro 2
persona2.rellenarDireccion("Avenida Condesa Sagasta", 12, 2, "a", 9452, "Feria", "Badajoz");
persona2.rellenarTelefono("movil", 647913578);
persona2.rellenarMail("Outlook", "pablo@Outlook.com");
//registro 3
persona3.rellenarDireccion("Calle Alberes", 19, 3, "c", 94576, "Montemolin", "Badajoz");
persona3.rellenarTelefono("movil", 6547891235);
persona3.rellenarMail("gmail", "andrea@gmail.com");


console.log("/*************************************************** Mostrtar Datos *************************************************************/");

console.log('/*********** Persona 1:  **********/ ');
persona1.mostrarDatos();
console.log('/*********** Persona 2:  **********/ ');
persona2.mostrarDatos();
console.log('/*********** Persona 3:  **********/ ');
persona3.mostrarDatos();

console.log("");
console.log("");
console.log("/****************************** Buscar Dni y Cambiar direccion, telefono y mail *****************************************************/");


var arraydni: any[] = [];

var result = function (a: any, b: any, c: any) {// añadir todos los Dni de la tres persona para luego buscarlo
    arraydni.push(a);
    arraydni.push(b);
    arraydni.push(c);
}

result(persona1.getDNI(), persona2.getDNI(), persona3.getDNI());

console.log("Buscar DNI ==> 457869F");

function buscarDni(dato: string): any { // buscar el dni
    switch (dato) {
        case arraydni[0]:
            persona1.cambiar(persona1.getDireccion(), persona1.getTelefono(), persona1.getMail());
            persona1.mostrarDatos();
            break;
        case arraydni[1]:
            persona2.cambiar(persona2.getDireccion(), persona2.getTelefono(), persona2.getMail());
            persona2.mostrarDatos();
            break;
        case arraydni[2]:
            persona3.cambiar(persona3.getDireccion(), persona3.getTelefono(), persona3.getMail());
            persona3.mostrarDatos();
            break;
        default:
            console.log("No se a encontrado Dni que se busca ");
            break;
    }
}

buscarDni('457869F');


