class Usuario extends Persona implements Acciones{
  private userName: string;
  

  constructor(nombre: string, edad: number,userName:string) {
    super(nombre, edad);
    this.userName = userName;

  }

  public mostrar(): string {
    
    return "Soy " + this.userName;
  }
  consultar(): string{
    return "puede";
  }
  guardar(): string{
    return "puede";
  }
  modificar(): string{
    return "No puede";
  }
  eliminar(): string{
    return "No puede";
  }


}


