export class Aluno{
  // ? -> serve para dizer que o campo é opcional
  constructor(
    public nome  ? : string,
    public email ? : string,
    public idade ? :number,
    public curso ? : string
  ){}
  
}