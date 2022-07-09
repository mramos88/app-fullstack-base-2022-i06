class Administrador extends Persona implements Acciones{
    public tipo: string;

  
  public mostrar(): string {
   
    return "soy admin "+super.mostrar();
  }
  consultar(): string{
    return "Puede";
  }
  guardar(): string{
    return "Puede";
  }
  modificar(): string{
    return "Puede";
  }
  eliminar(): string{
    return "Puede";
  }
}