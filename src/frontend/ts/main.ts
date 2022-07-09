

class Main implements EventListenerObject {
    public listaPersonas: Array<Persona> = new Array();
    public etidadesAcciones: Array<Acciones> = new Array();
    public nombre: string;
    
    constructor() {
            
        this.listaPersonas.push(new Usuario("Juan", 12, "jPerez"));
        this.listaPersonas.push(new Administrador("Pedro", 35));
        this.listaPersonas.push(new Persona("S", 12));
        this.etidadesAcciones.push(new Usuario("Juan", 12, "jPerez"));
        this.etidadesAcciones.push(new Administrador("Juan", 12));

        
    }

    public handleEvent(e:Event): void {
        console.log(e.target);
        console.log(e.type);


        if (e.type == "click") {
            alert("Hola " +  this.listaPersonas[0].nombre +" "+ e.target.id);    
        } else {
            alert("se hizo doble click en el titulo")
        }
        
     
    }

}

window.addEventListener("load", ()=> {
    let btn = document.getElementById("btnSaludar");
    let btn2 = document.getElementById("btnDoble");
    let main: Main = new Main();
    main.nombre = "Matias"
 
    btn2.addEventListener("dblclick", main);
    btn.addEventListener("click", main);
    

    let texto = document.getElementById("textarea_1");
    for (let i in main.etidadesAcciones) {
        texto.innerHTML +=  main.etidadesAcciones[i];    
    }
    /*console.log("usuario", main.usr.eliminar())
    console.log("administrador ",main.adm.eliminar())*/
});








