class Persona{
  public nombre: string;
  private edad: number;


  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  public mostrar() :string {
    return `Nombre =  ${this.nombre}  Edad= ${this.edad}`;
  }
}