

class Main implements EventListenerObject, ResponseLister {
    public listaPersonas: Array<Persona> = new Array();
    public etidadesAcciones: Array<Acciones> = new Array();
    public nombre: string;
    public framework: FrameWork = new FrameWork();
    constructor() {
        
        this.framework.ejecutarRequest("GET", "http://localhost:8000/devices", this)
        

        this.listaPersonas.push(new Usuario("Juan", 12, "jPerez"));
        this.listaPersonas.push(new Administrador("Pedro", 35));
        this.listaPersonas.push(new Persona("S", 12));
        this.etidadesAcciones.push(new Usuario("Juan", 12, "jPerez"));
        this.etidadesAcciones.push(new Administrador("Juan", 12));

        
    }

    public handlerResponse(status: number, response: string) {
        if (status == 200) {
            let resputaString: string = response;
            let resputa: Array<Device> = JSON.parse(resputaString);
            let cajaDiv = document.getElementById("caja");
            let datosVisuale = `<div class="collection">`
            for (let disp of resputa) {
                datosVisuale+= `<a href="#!" class="collection-item">${disp.name} - ${disp.description}</a>`
            }
            datosVisuale += `</div>`
            cajaDiv.innerHTML = datosVisuale;
          } else {
              alert("Algo salio mal")
          }
    }
    public handleEvent(e:Event): void {
        let objetoEvento = <HTMLInputElement>e.target;
        if (e.type == "click") {
            alert("Hola " +  this.listaPersonas[0].nombre +" "+objetoEvento.id);    
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
    

  
    
});








