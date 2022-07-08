class Main {
    public usr: Usuario;
    constructor() {
        this.usr = new Usuario("Juan", 12);
       
    }

}

function inicio() {
    let main: Main = new Main();
    let texto = document.getElementById("textarea_1");
    texto.innerHTML = main.usr.mostrar();
}

window.onload = inicio;


